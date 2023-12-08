<<<<<<< HEAD:src/shared/helpers/services/types.ts
import { IListItem } from "@/shared/components/Common/List/types/index.types";
import { AxiosError } from "axios";
=======
import { IListItem } from "@/components/Common/List/types/index.types";
import { HeadersDefaults } from "axios";
>>>>>>> fdf80734e79afe2ffffb2014e9d6d3b975137d1c:src/helpers/services/types.ts

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
