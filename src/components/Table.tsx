import Column from "antd/es/table/Column";
import moment from "moment";
import { Button, Space, Table } from "antd";

import { IRecord } from "../types/global";

interface IAppTable {
	data: IRecord[];
	deleteRecord: (key: string) => void;
	handleEdit: (record: IRecord) => void;
}

function AppTable({ data, deleteRecord, handleEdit }: IAppTable) {
	return (
		<Table dataSource={data} rowKey="key" className="custom_table" scroll={{ x: "max-content" }}>
			<Column
				title="Name"
				dataIndex="name"
				key="name"
				width="25%"
				sorter={(a, b) => a.name.localeCompare(b.name)}
				sortDirections={["ascend", "descend"]}
			/>
			<Column
				title="Date"
				dataIndex="date"
				key="date"
				width="25%"
				sorter={(a, b) => {
					const dateA = moment(a.date, "DD.MM.YYYY");
					const dateB = moment(b.date, "DD.MM.YYYY");
					return dateA.valueOf() - dateB.valueOf();
				}}
				sortDirections={["ascend", "descend"]}
			/>
			<Column
				title="Number"
				dataIndex="number"
				key="number"
				width="25%"
				sorter={(a, b) => a.number - b.number}
				sortDirections={["ascend", "descend"]}
			/>
			<Column
				title="Action"
				key="action"
				width="25%"
				render={(_, record) => (
					<Space size="middle">
						<Button color="cyan" variant="outlined" onClick={() => handleEdit(record as IRecord)}>
							Edit
						</Button>
						<Button danger onClick={() => deleteRecord(record.key)}>
							Delete
						</Button>
					</Space>
				)}
			/>
		</Table>
	);
}

export default AppTable;
