import { IRecord } from "./../types/global.d";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const formatDate = (date: dayjs.Dayjs): string => {
	return date.format("DD.MM.YYYY");
};

export const parseDate = (dateString: string): dayjs.Dayjs => {
	return dayjs(dateString, "DD.MM.YYYY", true);
};

export const isValidDate = (dateString: string): boolean => {
	return dayjs(dateString, "DD.MM.YYYY", true).isValid();
};

export const getCurrentDate = (): dayjs.Dayjs => {
	return dayjs();
};

export const mockData: IRecord[] = [
	{
		key: "1",
		name: "Arnold",
		date: "12.12.2021",
		number: 123456,
	},
	{
		key: "2",
		name: "Henry",
		date: "22.12.1993",
		number: 654321,
	},
	{
		key: "3",
		name: "Jacob",
		date: "11.11.2011",
		number: 333333,
	},
	{
		key: "4",
		name: "Eva",
		date: "17.08.2011",
		number: 278323,
	},
	{
		key: "5",
		name: "Max",
		date: "04.12.2024",
		number: 892901,
	},
	{
		key: "6",
		name: "Hanna",
		date: "10.11.2001",
		number: 222221,
	},
	{
		key: "7",
		name: "Simon",
		date: "02.02.2004",
		number: 129321,
	},
];
