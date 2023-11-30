import { IListItem } from "@/components/Common/List/types/index.types";
import { HeadersDefaults } from "axios";

export interface IHandleApiRequest<D> {
	endpoint: string;
	dataPayload?: D;
	method: string;
	headers?: HeadersDefaults;
}

export interface IHandleApiResponse {
	data: IListItem[];
	error: any;
}

export interface ICommonHeaders extends HeadersDefaults {
	Authorization: string;
}
