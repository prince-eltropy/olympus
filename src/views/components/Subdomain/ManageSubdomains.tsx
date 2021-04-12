import { Col, Row, Typography, Input, Button, Table } from "antd"
import { PlusCircleOutlined } from '@ant-design/icons';
import { subdomainCols, subdomainData } from "../../../dummyData";
import { Link, useHistory } from 'react-router-dom';




const { Search } = Input;
const { Title } = Typography;

export interface ManageSubdomainsProps {
		
}
	 
export const ManageSubdomains: React.FC<ManageSubdomainsProps> = () => {
	
	let history = useHistory();

	return (
		<>
				
					<Row>
						<Col span={7}>
							<Title level={3}> ALL SUBDOMAINS</Title>
						</Col>
						<Col span={10} className="pl-3">
							<Search placeholder="Search for subdomains..." allowClear />
						</Col>
						<Col span={7} className="pl-3 text-right">
							<Link to="/dashboard/add-subdomain" >
								<Button type="primary" className="ml-2 py-0" icon={<PlusCircleOutlined />} size="middle">
									New Subdomain
								</Button>
							</Link>
							
						</Col>

						<Col span={24}>
							<Table
								onRow={(record) => {
									return {
									  onClick: () => {
										history.push(`manage-subdomains/edit/${record.uid}`)
								}, }}}
							columns={subdomainCols}
							dataSource={subdomainData}
							rowKey={Math.floor(Math.random() * 1000).toString()} />
						</Col>
					</Row>
			
			
		</>
	);
}
