import { Row, Col } from 'antd';


export interface SubdomainSettingsProps {
	
}
 
export const SubdomainSettings: React.FC<SubdomainSettingsProps> = () => {
	return(
		<Row>
			<Col span={24}>
				<iframe 
					className="vh-100" 
					title="analytics" 
					src="https://uattokyo.eltropy.jp/newsettings/" 
					frameBorder="0" 
					width="100%"/>
			</Col>
		</Row>
	);
}
 