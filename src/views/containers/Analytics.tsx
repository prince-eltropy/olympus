import { Row, Col } from 'antd';

export interface AnalyticsProps {
	
}
 
export const Analytics: React.FC<AnalyticsProps> = ()  => {

	return (
		<div className="row m-0">
			<Row>
				<Col span={24}>
					<iframe 
						className="vh-100" 
						title="analytics" 
						src="http://aws.com" 
						frameBorder="0" 
						width="100%"/>
				</Col>
			</Row>	
			
		</div>
	);
}
 
