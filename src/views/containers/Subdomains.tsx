import { Tabs, Row, Col, Card, Select, Table } from 'antd';
import Text from 'antd/lib/typography/Text';
import { inprogressCols, inprogressData } from '../../dummyData';
import { ManageSubdomains } from '../components/Subdomain/';

const { Option } = Select;
const { TabPane } = Tabs;

export interface SubdomainsProps {
	match: any
}
 
export const Subdomains: React.FC<SubdomainsProps> = ({match}) => {
	let selectedTabKey = match.path === "/dashboard/manage-subdomains/in-progress" ? "2" : "1";
	return (
		<div className="container my-2 m-4 row m-0">
			<Tabs defaultActiveKey={selectedTabKey} >
				<TabPane tab="Active" key="1">
					<ManageSubdomains/>
				</TabPane>

				<TabPane tab="In Progress" key="2">
					<Row>	
						<Col span={24}>

							<Card 
								className="shadow-sm py-0" 
								bordered={false}>
							
									<div className="p-2 pl-4">
							
									<Text strong>Check Validity</Text> &nbsp;&nbsp;&nbsp;
									
									<Select 
										placeholder="Validated Subdomain" 
										className="m-1" 
										style={{ width: 190 }} >
										
										<Option value="vc1">Validated Certificate 1</Option>
										<Option value="vc2">Validated Certificate 2</Option>
										<Option value="vc3">Validated Certificate 3</Option>
										<Option value="vc4">Validated Certificate 4</Option>
									
									</Select>
								</div>

								<Table 
									columns={inprogressCols} 
									dataSource={inprogressData} 
									pagination={false} />

							</Card>
						</Col>
					</Row>
				</TabPane>
			</Tabs>
		</div>
	);
}