import { DatePicker, Form, Input, Modal } from "antd";
import { IRecord, modalTypes } from "../types/global";

interface IModal {
	isOpen: boolean;
	title: modalTypes | null;
	editingRecord: IRecord | null;
	onOk: () => void;
	onCancel: () => void;
	form: any;
}

function AppModal({ isOpen, title, editingRecord, onOk, onCancel, form }: IModal) {
	return (
		<Modal
			title={title}
			open={isOpen}
			onOk={onOk}
			onCancel={onCancel}
			okText={editingRecord ? "Save" : "Create"}
			cancelText="Cancel"
		>
			<Form form={form} layout="vertical">
				<Form.Item
					name="name"
					label="Name"
					rules={[
						{ required: true, message: "Please enter name" },
						{
							pattern: /^[a-zA-Zа-яА-ЯёЁ\s]+$/,
							message: "Please enter a valid name (letters only)",
						},
						{
							max: 40,
							message: "Name must be at most 40 characters",
						},
					]}
				>
					<Input className="custom_input" placeholder="Enter name" />
				</Form.Item>

				<Form.Item name="date" label="Date" rules={[{ required: true, message: "Please select date" }]}>
					<DatePicker className="custom_input" format="DD.MM.YYYY" placeholder="Select date" />
				</Form.Item>

				<Form.Item
					name="number"
					label="Number"
					rules={[
						{ required: true, message: "Please enter number" },
						{
							pattern: /^\d+$/,
							message: "Please enter a valid number (digits only)",
						},
						{
							max: 20,
							message: "Number must be at most 20 characters",
						},
					]}
				>
					<Input className="custom_input" placeholder="Enter number" min={0} />
				</Form.Item>
			</Form>
		</Modal>
	);
}

export default AppModal;
