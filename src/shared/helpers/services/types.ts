import { IListItem } from "@/shared/components/Common/List/types/index.types";
import { AxiosError } from "axios";

export interface IHandleApiRequest<D, H> {
	endpoint: string;
	dataPayload?: D;
	method: string;
	headers?: H;
}

export interface IHandleApiResponse {
	data: IListItem[];
	error: AxiosError | null;
}
