import { Radio, Row, Col, Button, Input, Tooltip } from "antd";
import { RightOutlined,InfoCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from "react";


export interface AddSSLProps {
	
}
 
export const AddSSL: React.FC<AddSSLProps> = () => {

	const [certSrc, setCertSrc] = useState(0);
	const [certName, setCertName] = useState('')


	return (
		<>
			<Radio.Group onChange={e => setCertSrc(e.target.value)}>
				<Row>
					<Col span={12}>
						<Radio value={1}>Request a certificate</Radio>
					</Col>
					<Col span={12}>
						<Radio value={2}>Import a certificate</Radio>
					</Col>
				</Row>
				<Row>
					<Input 
						onChange={e=> setCertName(e.target.value)}
						placeholder="Certificate Name" className="mt-3" 
						style={{ width: 350 }} 
						suffix={
							<Tooltip title="Example : securetext.samplecu.com">
						<InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
						</Tooltip>
						}
						// onChange={e => setNewDomainName(e.target.value)} 
					/>
				</Row>
			</Radio.Group>	
			
			<div className="m-1 text-right">
				<Link 
					to="/dashboard/add-subdomain/cname-mapping">
					<Button type="primary" disabled={certName === '' || certSrc === 0}> <RightOutlined /> Next</Button>
				</Link>
			</div>
		</>
	);
}