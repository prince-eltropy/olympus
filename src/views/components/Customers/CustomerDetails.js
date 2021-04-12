import { Tabs, Row, Col, Typography, Card, Divider } from 'antd';

const { Text } = Typography;

const { TabPane } = Tabs;

const CustomerDetails = ({ customerId }) => {

	return (
		<>
			<div className="container my-2 m-4 row m-0">
			<Tabs defaultActiveKey="1" >
				<TabPane tab="BASIC INFO" key="1">
					<Row>
					
						<Col span={24}>
							<Card className="shadow-sm py-0" bordered={false}>
								<div className="my-3">
									<Text strong>CUSTOMER ID </Text> &nbsp;&nbsp;&nbsp;
									<Text>1234</Text>
								</div>
								<div className="my-3">
									<Text className="my-3" strong>CUSTOMER NAME</Text>&nbsp;&nbsp;&nbsp;
									<Text> GLOBAL CREDIT UNION</Text>
								</div>
								<div className="my-3">
									<Text  strong>OFFICIAL EMAIL</Text>&nbsp;&nbsp;&nbsp;
									<Text> partner@globalcreditunion.com</Text>
								</div>
								<div className="my-3">
									<Text  strong>WEBSITE</Text>&nbsp;&nbsp;&nbsp;
									<Text> https://globalcreditunion.com</Text>
								</div>
								<div className="my-3">
									<Text  strong>ADDRESS</Text>&nbsp;&nbsp;&nbsp;
									<Text> #42, Jameson street, Palo alto</Text>
								</div>
								<div className="my-3">
									<Text  strong>STATE</Text>&nbsp;&nbsp;&nbsp;
									<Text> California</Text>
								</div>
								<div className="my-3">
									<Text  strong>COUNTRY</Text>&nbsp;&nbsp;&nbsp;
									<Text> United States of America</Text>
								</div>
								<div className="my-3">
									<Text  strong>AUM</Text>&nbsp;&nbsp;&nbsp;
									<Text> $ 60M</Text>
								</div>
								<div className="my-3">
									<Text  strong>ARR</Text>&nbsp;&nbsp;&nbsp;
									<Text> $ 200K</Text>
								</div>
								<div className="my-3">
									<Text  strong>CUSTOMER SINCE</Text>&nbsp;&nbsp;&nbsp;
									<Text> May 2019</Text>
								</div>

								
							</Card>
						</Col>
					</Row>
				</TabPane>
				<TabPane tab="CONTACT INFO" key="2">
					<Row>
						
						<Col span={24}>
							<Card className="shadow-sm py-0" bordered={false}>
								<Divider orientation="left">BILLING</Divider>
									<Row className="px-5">
										<Col span={12} className="mb-3">
											<Text strong>Name :</Text>&nbsp;&nbsp;<Text>Skyler White</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Email :</Text>&nbsp;&nbsp;<Text>skyler.white@globalcreditunion.com</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Phone :</Text>&nbsp;&nbsp;
											<Text>+1 800 875 5678</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Alternate Phone :</Text>&nbsp;&nbsp;
											<Text>+1 800 875 5679</Text>
										</Col>
									</Row>
								<Divider orientation="left">ADMIN</Divider>
								<Row className="px-5">
										<Col span={12} className="mb-3">
											<Text strong>Name :</Text>&nbsp;&nbsp;<Text>Skyler White</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Email :</Text>&nbsp;&nbsp;<Text>skyler.white@globalcreditunion.com</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Phone :</Text>&nbsp;&nbsp;
											<Text>+1 800 875 5678</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Alternate Phone :</Text>&nbsp;&nbsp;
											<Text>+1 800 875 5679</Text>
										</Col>
									</Row>
								<Divider orientation="left">DOMAIN MANAGERS</Divider>
								<Row className="px-5">
										<Col span={12} className="mb-3">
											<Text strong>Name :</Text>&nbsp;&nbsp;<Text>Skyler White</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Email :</Text>&nbsp;&nbsp;<Text>skyler.white@globalcreditunion.com</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Phone :</Text>&nbsp;&nbsp;
											<Text>+1 800 875 5678</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Alternate Phone :</Text>&nbsp;&nbsp;
											<Text>+1 800 875 5679</Text>
										</Col>
									</Row>
								<Divider orientation="left">TECHNICAL SUPPORT</Divider>
								<Row className="px-5">
										<Col span={12} className="mb-3">
											<Text strong>Name :</Text>&nbsp;&nbsp;<Text>Skyler White</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Email :</Text>&nbsp;&nbsp;<Text>skyler.white@globalcreditunion.com</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Phone :</Text>&nbsp;&nbsp;
											<Text>+1 800 875 5678</Text>
										</Col>
										<Col span={12} className="mb-3">
											<Text strong>Alternate Phone :</Text>&nbsp;&nbsp;
											<Text>+1 800 875 5679</Text>
										</Col>
									</Row>
							</Card>
						</Col>
					</Row>
				</TabPane>
				<TabPane tab="CONTRACT DETAILS" key="3">
					<Row>	
						<Col span={24}>
							<Card className="shadow-sm py-0" bordered={false}>
								
							</Card>
						</Col>
					</Row>
				</TabPane>
			</Tabs>
		</div>
		</>
	);
}
 
export default CustomerDetails;