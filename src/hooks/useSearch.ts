import { useState, useMemo } from "react";
import { IRecord } from "../types/global";

export const useSearch = (data: IRecord[]) => {
	const [searchText, setSearchText] = useState("");

	const filteredData = useMemo(() => {
		if (!searchText) return data;

		return data.filter(
			(item) =>
				item.name.toLowerCase().includes(searchText.toLowerCase()) ||
				item.date.includes(searchText) ||
				item.number.toString().includes(searchText)
		);
	}, [data, searchText]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);

	return { searchText, filteredData, handleSearch };
};
