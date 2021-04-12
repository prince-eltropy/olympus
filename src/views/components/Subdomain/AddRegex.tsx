import { Select, Card, Button, Modal } from "antd";
import { PlayCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { byDNSModalConfig, byEmailModalConfig } from "../../../dummyData";


export interface AddRegexProps {
	byMethod: Number,
}
 
export const AddRegex: React.FC<AddRegexProps> = ({byMethod}) => {
	const { Option } = Select;
	return (
		<>
			<div>
				<b>MAP CERTIFICATE :</b> 
				
				<Select 
					placeholder="Select an Certificate" 
					className="m-1" 
					style={{ width: 190 }} >

					<Option value="vc1">
							Validated Certificate 1
					</Option>
					
					<Option value="vc2">
						Validated Certificate 2
					</Option>
					
					<Option value="vc3">
						Validated Certificate 3
					</Option>
					
					<Option value="vc4">
						Validated Certificate 4
					</Option>
				
				</Select>
				<br/>
			</div>

			<div>
				<b>WHITELIST IPs:</b> 
				
				<Card 
					className="p-0" 
					style={{ width: 300 }}
				>
					<span>198.168.25.203</span><br/>
					<span>198.168.25.204</span>
				</Card>
			</div>

			<div className="m-1 text-right">
				<Link to="/dashboard/add-subdomain/add-regex">
					<Button onClick={() => {
						byMethod === 1 ?
						Modal.info(byDNSModalConfig) :
						Modal.info(byEmailModalConfig)
					}} type="primary"> 
						< PlayCircleOutlined /> Go Live
					</Button>
				</Link>
			</div>
		</>
	);
}
