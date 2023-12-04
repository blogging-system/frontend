import { useParams, useRouter } from "next/navigation";
import { PathHelper } from "@/helpers/path/path.helper";
import { FormEvent, useState } from "react";
import { IListItem } from "@/components/Common/List/types/index.types";
import { getSavedItemLocalStorage } from "@/helpers/local-storage/localStorage.helper";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { handleUpdateSubmit } from "@/components/Common/Form/helpers/update.helper";

/**
 * Submits the form data to the API.
 *
 * @return {Promise<void>} A promise that resolves when the submission is complete.
 */

export const useHandleSubmit = () => {
	const [submitButtonIsLoading, setSubmitButtonIsLoading] = useState(false);

	const { slug } = useParams();
	const { back } = useRouter();

	const isPostOrSeries = PathHelper.isPathPostsOrSeries(slug.toString());
	const isFormCreateOrUpdate = PathHelper.isFormCreateOrUpdate(slug);

	const savedItem: IListItem = getSavedItemLocalStorage({
		slug: slug[slug.length - 1],
		path: isPostOrSeries,
	});

	const submit = async <D>(dataPayload: D) => {
		/**
		 * Submits the form data to the API.
		 *
		 * @param {FormEvent<HTMLFormElement>} e - The form event.
		 * @param {D} dataPayload - The data payload to be submitted.
		 * @return {Promise<void>} A promise that resolves when the submission is complete.
		 */

		setSubmitButtonIsLoading(true);

		if (isFormCreateOrUpdate === "create") {
			const { data, error } = await handleApiRequest({
				endpoint: `${isPostOrSeries}?sort=-1&pageSize=5&pageNumber=1`,
				dataPayload,
				method: "POST",
			});

			if (data && !error) {
				back();
				setSubmitButtonIsLoading(false);
			} else if (error && !data) {
				setSubmitButtonIsLoading(false);
			}

			if (data || error) {
				setSubmitButtonIsLoading(false);
			}
		} else {
			const { data, error } = await handleUpdateSubmit({
				id: savedItem._id,
				slug: slug,
				isUpdatePostOrSeries: isPostOrSeries,
				dataPayload,
			});

			if (data || error) {
				setSubmitButtonIsLoading(false);
			}
		}
	};

	return {
		submit,
		savedItem,
		submitButtonIsLoading,
	};
};
