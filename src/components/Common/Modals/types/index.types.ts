export interface IPrimaryModal {
	title: string;
	msg: string;
	isOpen: boolean;
	setIsOpenModal: (e: boolean) => void;
	confirmEvent: () => Promise<void> | void;
}
