import { AutoComplete, Button, Col, Divider, Input, List, Menu, Row, Select, Tabs } from "antd"
import Search from "antd/lib/input/Search";
import { useState } from "react";
import { AccessControlSettingsProps } from "../../types/props/containerProps";
import { roles } from "../../dummyData";
import { showMessage } from "../../helper";


const { Option } = Select;
const { TabPane } = Tabs;
 
const userData = [
	'Sarala V',
	'Prashantha Kumar',
	'Murali Krishna',
	'Jim Cairns',
	'Rakesh Goyal',
	'Sai Kothapalle'
  ];

const subdomainData = [
	{
		value: "Texas CU",
		subdomain: "text.tcu.com"
	},
	{
		value: "Kansas CU",
		subdomain: "start.kansascu.com"
	},
	{
		value: "San Jose CU",
		subdomain: "sms.sanjose.com"
	}
]

const AccessControlSettings: React.FC<AccessControlSettingsProps> = () => {

	const [currentUser, setCurrentUser] = useState(userData[0]);
	const [usersList, setUsersList] = useState(userData);
	const [domainsData, setDomainsData] = useState(subdomainData);
	const [userSubdomainData, setUserSubdomainData] = useState([{
		value: "Texas CU",
		subdomain: "text.tcu.com"
	}]);

	const filterUser = (query :string) => {
		
		if(query && query !== "") {
			let filteredUsers = userData.filter(x => {return x.toLowerCase().includes(query.toLowerCase()) !== false});
			setUsersList(filteredUsers);
			setCurrentUser(filteredUsers[0]);
		} else {
			setUsersList(userData);
			setCurrentUser(usersList[0]);
		}
	}

	const filterDomains = (query :string) => {
		
		if(query && query !== "") {
			let filteredDomains = domainsData.filter(x => {
						if(x.value.toLowerCase().includes(query.toLowerCase())) { return x; } else {
							return null;
						} 
							

				});
			setDomainsData(filteredDomains);
		} else {
			setDomainsData(subdomainData);
		}
	}

	const removeSubdomainAccess = (subdomainName: string) => {
		showMessage("Please Wait...", `${subdomainName}'s access was successfully revoked from ${currentUser}`)
		let filteredDomains = userSubdomainData.filter(x => {return x.value !== subdomainName});
		setUserSubdomainData(filteredDomains);
	};
	const addSubdomainAccess = (subdomainName: string) => {
		showMessage("Please Wait...", `${subdomainName}'s access was successfully granted from ${currentUser}`)
		let newDomainInfo = subdomainData.find(x => x.value === subdomainName);
		let updatedSubdomainData = [...userSubdomainData];
		if(newDomainInfo) { 
			updatedSubdomainData.push(newDomainInfo)
		}	
		setUserSubdomainData(updatedSubdomainData);
	};



	

	

	return (
		<>
			<div className="bg-white m-2 p-2 shadow-sm pb-4">
				<Row>
					<Col span={8} className="px-3 py-0">

						<Divider orientation="left">All Colleagues</Divider>
						<Search placeholder="Search for a colleague..." allowClear onChange={e => filterUser(e.target.value)} />
						<div className="m-2" />

						<Menu defaultSelectedKeys={["0"]}>
							{usersList.map((user, key)=>(
								<>
									<Menu.Item 
										className="my-0" 
										key={key}
										onClick={(e) => setCurrentUser(user)}
									>
										{user}
									</Menu.Item>
									{/* <Menu.Divider/> */}
								</>
							))}
							
						</Menu>
					</Col>
					<Col span={16} className="pl-3">
						<Tabs defaultActiveKey="1" >
							<TabPane tab="Roles" key="1">
							<Select
								mode="multiple"
								style={{ width: '100%' }}
								placeholder="Please select"
								defaultValue={['BASIC']}
								onSelect = {selectedIndex => 
									showMessage("Please Wait...", `${selectedIndex}  was successfully assigned to ${currentUser}`)}
								onDeselect = {(selectedIndex) => showMessage("Please Wait...", `${selectedIndex}  was successfully revoked from ${currentUser}`)}
							>
							{roles.map((role, key)=>(
								<Option value={role} key={key}>{role}</Option>
							))}
						</Select>
							</TabPane>
							<TabPane tab="Subdomains" key="2">
								<AutoComplete
									style={{width: "100%"}}
									options={domainsData}
									onSelect={addSubdomainAccess}
								>
									<Input.Search placeholder="Search for Subdomains" onChange={e => filterDomains(e.target.value)}/>
								</AutoComplete>

								<List
									className="mt-2 pl-2"
									dataSource={userSubdomainData}
									renderItem={subd => 
										<List.Item actions={[<Button size="small" type="link" key="remove-subdomain" onClick={() => removeSubdomainAccess(subd.value)}>Remove</Button>]}>
											{subd.value} ( {subd.subdomain} ) 
										</List.Item>}
								/>
							</TabPane>
						</Tabs>
					</Col>
				</Row>
			</div>
		</>
	);
}
 
export default AccessControlSettings;