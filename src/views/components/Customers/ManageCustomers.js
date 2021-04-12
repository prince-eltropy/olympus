import { Col, Row, Typography, Input, Button, Table } from "antd"
import { PlusCircleOutlined } from '@ant-design/icons';
import { customerCols, customerData } from "../../../dummyData";
import { useHistory } from "react-router-dom";


const { Search } = Input;
const { Title } = Typography;


const ManageCustomers = () => {

	let history = useHistory();

	return (
		<>
				<div className="container m-4 row m-0">
					<Row>
						<Col span={7}>
							<Title level={3}> ALL CUSTOMERS</Title>
						</Col>
						<Col span={10} className="pl-3">
							<Search placeholder="Search for customers..." allowClear />
						</Col>
						<Col span={7} className="pl-3 text-right">
							
							<Button type="primary" className="ml-2 py-0" icon={<PlusCircleOutlined />} size="medium">
								START ONBOARDING
							</Button>
						</Col>

						<Col span={24}>
							<Table 
								onRow={(record) => {
									return {
									  onClick: () => {
										history.push(`manage-customers/view/${record.uid}`)
								}, }}}
							columns={customerCols} dataSource={customerData} />
						</Col>
					</Row>
				</div>
			
		</>
	);
}
 
export default ManageCustomers;