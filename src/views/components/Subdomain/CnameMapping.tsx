import { Radio, Row, Col, Button, Input, Tooltip, Modal, Divider, List, Table } from "antd";
import { RightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from "react";
import { byDNSModalConfig, byEmailModalConfig } from "../../../dummyData";


export interface CnameMappingProps {
	setByMethod: any
}
 
export const CnameMapping: React.FC<CnameMappingProps> = ({setByMethod}) => {
	
	return (
		<>
			<Radio.Group defaultValue={0} onChange={e => setByMethod(e.target.value)}>
				<Row>
					<Col span={15}>
						<Radio value={0}>By Email</Radio>
					</Col>
					<Col span={6}>
						<Radio value={1}>By DNS</Radio>
					</Col>
				</Row>
			</Radio.Group>	
			<br/>
			
			<Input placeholder="Custom Tag" className="m-3" style={{ width: 200 }} disabled value="Name"/>
			
			<Input placeholder="samplecu" className="m-1" style={{ width: 200 }}/><br/>
			
			<div className="m-1 text-right">
				<Link to="/dashboard/add-subdomain/add-regex">

					<Button  type="primary"> 
					<RightOutlined /> Review
					</Button>
				</Link>
			</div>
		</>
		
	);
}