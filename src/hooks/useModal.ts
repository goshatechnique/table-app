import { useState } from "react";
import { IRecord, modalTypes } from "../types/global";

export const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState<modalTypes | null>(null);
	const [editingRecord, setEditingRecord] = useState<IRecord | null>(null);

	const showModal = (title: modalTypes) => {
		setModalTitle(title);
		setIsModalOpen(true);
	};

	const hideModal = () => {
		setIsModalOpen(false);
		setModalTitle(null);
		setEditingRecord(null);
	};

	return {
		isModalOpen,
		modalTitle,
		editingRecord,
		showModal,
		hideModal,
		setEditingRecord,
	};
};
