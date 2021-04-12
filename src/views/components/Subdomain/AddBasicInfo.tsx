import { Select, Input, Button } from "antd";
import { RightOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateHeaderText } from "../../../redux/actions";
import { useState } from "react";

export interface AddBasicInfoProps {

}
 


export const AddBasicInfo: React.FC<AddBasicInfoProps> = () => {
	const [newDomainName, setNewDomainName] = useState('');
	const [subdomainType, setSubdomainType] = useState('');
	
	const selectOptionHandler = (value :string) => {
		setSubdomainType(value)
	}

	const { Option } = Select;
	return (
		<>			
			<Input 
				placeholder="Domain host RegEx : samplecu.eltropy.com" className="m-1" 
				style={{ width: 350 }} 
				onChange={e => setNewDomainName(e.target.value)} 
			/>
			<br/>
			<Select 
				placeholder="Select an Industry" 
				className="m-1" 
				style={{ width: 190 }} 
				onChange={selectOptionHandler}
				>

				<Option value="BFSI">BFSI</Option>
				
				<Option value="SEMICONDUCTOR">SEMICONDUCTOR</Option>
				
				<Option value="SOLAR">SOLAR</Option>
				
				<Option value="OTHER">OTHER</Option>
				
			</Select><br/>
			
			<div className="m-1 text-right">
				<Link to="/dashboard/add-subdomain/add-ssl-certificate">
					<Button type="primary" disabled={newDomainName === "" || subdomainType === ""}> 				<RightOutlined 
							// onClick={updateHeading(newDomainName)} 
							/> 
							Next
					</Button>
				</Link>
			</div>
						
		</>
	);
}

export default AddBasicInfo;