import { useState } from "react";
import { IRecord } from "../types/global";

export const useRecords = (initialData: IRecord[]) => {
	const [data, setData] = useState<IRecord[]>(initialData);

	const createRecord = (newRecord: Omit<IRecord, "key">) => {
		const recordWithKey = { ...newRecord, key: String(Date.now()) };
		setData((prev) => [...prev, recordWithKey]);
	};

	const updateRecord = (key: string, updates: Partial<Omit<IRecord, "key">>) => {
		setData((prev) => prev.map((item) => (item.key === key ? { ...item, ...updates } : item)));
	};

	const deleteRecord = (key: string) => {
		setData((prev) => prev.filter((item) => item.key !== key));
	};

	return { data, createRecord, updateRecord, deleteRecord, setData };
};
