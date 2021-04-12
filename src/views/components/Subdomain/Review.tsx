import { Radio, Row, Col, Button, Input, Tooltip, Modal, Divider, List, Table } from "antd";
import { RightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { byDNSModalConfig, byEmailModalConfig } from "../../../dummyData";


export interface ReviewProps {
	byMethod: any
}
 


export const Review: React.FC<ReviewProps> = ({byMethod}) => {
	let history = useHistory();
	let goToSubdomains = () => {
		history.push('../../dashboard/manage-subdomains/in-progress')
	}
	byDNSModalConfig.onOk = goToSubdomains;
	byEmailModalConfig.onOk = goToSubdomains;

	const verifyMethod = byMethod === 0 ? "Email" : "DNS";
	const newSubdomainDetails = [
		{prop: "Name", val:"samplecu.eltropy.com"},
		{prop: "Industry", val:"Other"},
		{prop: "Certificate Name", val:"securetext.samplecu.com"},
		{prop: "Verify By", val:verifyMethod},
		{prop: "Name Tag", val:"samplecu"},
	];


	return (
		<>
			<Divider className="mt-0" orientation="left">Review Details</Divider>
			<List
			size="small"
			dataSource={newSubdomainDetails}
			renderItem={item => <List.Item><b>{item.prop}</b> : {item.val}</List.Item>}
			/>
			
			<div className="m-1 text-right">
				<Button onClick={() => {
						byMethod === 1 ?
						Modal.info(byDNSModalConfig) :
						Modal.info(byEmailModalConfig)
					}} type="primary"> 
					<RightOutlined /> Validate Domain
				</Button>
			</div>
		</>
		
	);
}