export interface IHandleApiRequest<D, H> {
	endpoint: string;
	dataPayload?: D;
	method: string;
	headers?: H;
}
