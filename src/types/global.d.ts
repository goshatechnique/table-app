export interface IRecord {
	key: string;
	name: string;
	date: dayjs.Dayjs;
	number: number;
}

export interface IForm {
	name: string;
	date: dayjs.Dayjs;
	number: number;
}

export type modalTypes = "Edit record" | "Create record";
