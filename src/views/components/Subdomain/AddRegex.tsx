import { Select, Card, Button, Modal } from "antd";
import { PlayCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { cNameMappingReview } from "../../../dummyData";
import { showMessage } from "../../../helper";


export interface AddRegexProps {
	
}
 
export const AddRegex: React.FC<AddRegexProps> = () => {
	const { Option } = Select;
	const history = useHistory();
	cNameMappingReview.onOk = () => {
		showMessage("Please wait...", "Certificate Mapped successfully")
		history.push("/dashboard/manage-subdomains/recent");
	}
	return (
		<div className="m-4 p-4 bg-white shadow-sm">
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
					<Button type="primary" onClick={() => Modal.info(cNameMappingReview)}> 
						< PlayCircleOutlined /> Go Live
					</Button>
			</div>
		</div>
	);
}
