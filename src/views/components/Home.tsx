import { Col, Row, Typography, Card } from "antd"
import {
	ArrowRightOutlined
} from '@ant-design/icons';

const { Title } = Typography;

export interface Props {
	
}

export const Home: React.FC<Props> = () => {
	return (
		<>
			<div className="container my-3 row m-0 px-2">
				<Row>
					
					<Col span={13} className="p-2 pl-4">
						<Card className="text-center bg-red" bordered={false}>
							<Title>REVIEW CHANGES</Title>
							<Title className="fs-10 my-0">5</Title>
							<Title level={4}>
								VIEW CHANGE REQUESTS <ArrowRightOutlined/>
							</Title>
						</Card>
					</Col>

					<Col span={11} className="p-2">
						<Card className="text-center bg-green" bordered={false}>
							<Title>APPROVED</Title>
							<Title className="fs-10 my-0">7</Title>
							<Title level={4}>
								VIEW ACTIVITY LOG &nbsp;
								<ArrowRightOutlined/>
							</Title>
						</Card>
					</Col>

					<Col span={11} className="p-2 pl-4 bg-blue">
						<Card className="text-center" bordered={false}>
							<Title>QUERIES</Title>
							<Title className="fs-10 my-0">4</Title>
							<Title level={4}>
								VIEW QUERY CENTER 
								<ArrowRightOutlined/>
							</Title>
						</Card>
					</Col>

					<Col span={13} className="p-2">
						<Card className="text-center bg-yellow" bordered={false}>
							<Title>NEW CUSTOMER</Title>
							<Title className="fs-10 my-0">17</Title>
							<Title level={4}>
								VIEW ONBOARDING REQUESTS 
								<ArrowRightOutlined/>
							</Title>
						</Card>
					</Col>

	
				</Row>
					
			</div>
			
		</>
	);
}
 
