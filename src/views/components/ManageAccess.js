import { Col, Row, Typography, Input, Table } from "antd"
import { accessCols, accessData } from "../../dummyData";

const { Search } = Input;
const { Title } = Typography;

const ManageAccess = () => {
	
	return (
		<>
			
					<Row>
						<Col span={14}>
							<Title level={3}> ACCESS PROVIDED</Title>
						</Col>
						<Col span={10} className="pl-3">
							<Search placeholder="Search for colleagues..." allowClear />
						</Col>
					

						<Col span={24}>
							<Table columns={accessCols} dataSource={accessData} />
						</Col>
					</Row>
					
			
			
		</>
	);
}
 
export default ManageAccess;