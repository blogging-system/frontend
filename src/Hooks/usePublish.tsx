import { useMutation } from "@apollo/client";
import { PUBLISH_POST } from "@/GraphQL/Posts/Posts.mutations";

const usePublish = (_id: any) => {
	useMutation(PUBLISH_POST, {
		onCompleted: (response) => {
			console.log("hi");
			console.log(response);
			console.log(_id);
		},

		onError: (error: any) => {
			console.error(error.message);
		},
	});
};

export default usePublish;
