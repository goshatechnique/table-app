import { Button, Form, Input } from "antd";
import AppTable from "./components/Table";
import AppModal from "./components/Modal";
import { useRecords } from "./hooks/useRecords";
import { useSearch } from "./hooks/useSearch";
import { useModal } from "./hooks/useModal";
import { IForm, IRecord } from "./types/global";
import { formatDate, mockData, parseDate } from "./helpers";
import "./App.scss";

function App() {
	const [form] = Form.useForm();
	const { data, createRecord, updateRecord, deleteRecord } = useRecords(mockData);
	const { isModalOpen, modalTitle, editingRecord, showModal, hideModal, setEditingRecord } = useModal();
	const { searchText, filteredData, handleSearch } = useSearch(data);

	const handleCreateRecord = (formData: IForm) => {
		createRecord({
			name: formData.name,
			date: formatDate(formData.date),
			number: formData.number,
		});
	};

	const handleUpdateRecord = (formData: IForm) => {
		if (!editingRecord) return;

		updateRecord(editingRecord.key, {
			name: formData.name,
			date: formatDate(formData.date),
			number: formData.number,
		});
	};

	const handleEdit = (record: IRecord) => {
		setEditingRecord(record);

		form.setFieldsValue({
			name: record.name,
			date: parseDate(record.date),
			number: record.number,
		});
		showModal("Edit record");
	};

	const handleOk = () => {
		form.validateFields()
			.then((values: IForm) => {
				if (editingRecord) {
					handleUpdateRecord(values);
				} else {
					handleCreateRecord(values);
				}
				handleCancel();
			})
			.catch(console.error);
	};

	const handleCancel = () => {
		form.resetFields();
		hideModal();
	};

	const handleCreate = () => {
		form.resetFields();
		setEditingRecord(null);
		showModal("Create record");
	};

	return (
		<div className="App">
			<div className="custom_navigator">
				<Input
					className="custom_search"
					placeholder="Search by name, date or number..."
					value={searchText}
					onChange={handleSearch}
				/>
				<Button type="primary" onClick={handleCreate}>
					Add record
				</Button>
			</div>

			<AppTable data={filteredData} deleteRecord={deleteRecord} handleEdit={handleEdit} />

			<AppModal
				isOpen={isModalOpen}
				title={modalTitle}
				editingRecord={editingRecord}
				onOk={handleOk}
				onCancel={handleCancel}
				form={form}
			/>
		</div>
	);
}

export default App;
