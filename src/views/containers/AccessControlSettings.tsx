import { AutoComplete, Button, Col, Divider, Input, List, Menu, Row, Select, Tabs } from "antd"
import Search from "antd/lib/input/Search";
import { useEffect, useState } from "react";
import { AccessControlSettingsProps } from "../../types/props/containerProps";
// import { roles } from "../../dummyData";
import { showMessage } from "../../helper";
import { genericApiCall } from "../../utils/services";
import HttpMethods from "../../types/enums/HttpMethods";


const { Option } = Select;
const { TabPane } = Tabs;
 
// const userData = [
// 	'Sarala V',
// 	'Prashantha Kumar',
// 	'Murali Krishna',
// 	'Jim Cairns',
// 	'Rakesh Goyal',
// 	'Sai Kothapalle'
//   ];

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

interface subdomainAutocompleteType {
	id: string
	value: string
}
interface subdomainType {
	id: string,
    domainId: number,
    createdOn: Date,
    updatedOn: Date,
    domainName: string,
    industry: string,
    certificateName: string,
    verifyMethod: string,
    verifyOn: string,
    status: string,
    isDeleted: boolean
}
interface roleInUserListType {
	id: string,
	name: string
}
interface subdomainInUserListType {
	id: string,
	name: string
}
interface userListType {
	id: string,
	createdOn: string,
	updatedOn: string,
	fullname: string,
	username: string,
	email: string,
	department: string,
	roles: roleInUserListType[],
	domains: subdomainInUserListType[]
}
interface roleListType {
	id: string,
    createdOn: string,
    updatedOn: string,
    name: string,
    access: [],
    isDeleted: boolean
}

const AccessControlSettings: React.FC<AccessControlSettingsProps> = () => {

	const [defaultSubdomains, setDefaultSubdomains] = useState<subdomainAutocompleteType[]>();

	const [currentUser, setCurrentUser] = useState<userListType>();
	const [currentUserRole, setCurrentUserRoles] = useState<string[]>();
	const [usersList, setUsersList] = useState<userListType[]>();
	const [domainsData, setDomainsData] = useState<subdomainAutocompleteType[]>();
	const [currentUserSubdomainData, setUserSubdomainData] = useState<subdomainAutocompleteType[]>([]);

	const [roles, setRoles] = useState<roleListType[]>();

  const getAllRoles = async () => {
	let allRoles = await genericApiCall(HttpMethods.GET, '/adminportal/roles', {});
	let activeRoles = allRoles.filter((x:any) => x.isDeleted === false)
	setRoles(activeRoles);
  }

  const getAllSubdomains = async () => {
	
	let allSubdomains: subdomainType[] = await genericApiCall(HttpMethods.GET, '/adminportal/subdomains', {});
	if(allSubdomains) {
		let mappedSubdomains = Array.from(allSubdomains, x => {return {id:x.id,value:x.domainName}});
		// console.log(mappedSubdomains);
		setDomainsData(mappedSubdomains);
		setDefaultSubdomains(mappedSubdomains) 
		
	}
  }


  	const setDefaultRolesSubdomainsForCurrentUser = () => {
		let cUserRoles = currentUser?.roles;
		let cUserSubdomains = currentUser?.domains;
		
		
		if(cUserRoles) {
			let mappedRoles = Array.from(cUserRoles, x => {return x.name});
			setCurrentUserRoles(mappedRoles);
			console.log(currentUserRole, mappedRoles);
		} else {
			setCurrentUserRoles([]);
		}

		if(cUserSubdomains) {
			let mappedSubdomains = Array.from(cUserSubdomains, x => {return {id: x.id, value:x.name}});
			// console.log(mappedSubdomains);
			setUserSubdomainData(mappedSubdomains);
		} else {
			setUserSubdomainData([]);
		}

	}

	const filterUser = (query :string) => {
		let userData = usersList;
		if(query && query !== "" && userData) {
			let filteredUsers = userData.filter(x => {return x.fullname.toLowerCase().includes(query.toLowerCase()) !== false});
			setUsersList(filteredUsers);
			setCurrentUser(filteredUsers[0]);
		} else {
			setUsersList(userData);
			// setCurrentUser(userData2[0]);
		}
	}

	const filterDomains = (query :string) => {
		
		if(domainsData && query && query !== "") {
			let filteredDomains = domainsData.filter(x => {
						if(x.value.toLowerCase().includes(query.toLowerCase())) { return x; } else {
							return null;
						} 
							

				});
			setDomainsData(filteredDomains);
		} else {
			setDomainsData(defaultSubdomains);
		}
	}

	const removeSubdomainAccess = async(subdomainName: string, subdomainID: string) => {
		showMessage("Please Wait...", `${subdomainName}'s access was successfully revoked from ${currentUser?.fullname}`)

		await genericApiCall(HttpMethods.DELETE, `/adminportal/users/${currentUser?.id}/subdomains/${subdomainID}`, {});
		let filteredDomains = currentUserSubdomainData.filter(x => {return x.id !== subdomainID});
		setUserSubdomainData(filteredDomains);
	};


	const addSubdomainAccess = async( subdomainName: string, optionData :any) => {
		showMessage("Please Wait...", `${subdomainName}'s access was successfully granted from ${currentUser?.fullname}`)

		let payload = {
			id: optionData.id,
			name: subdomainName
		}

		await genericApiCall(HttpMethods.POST, `/adminportal/users/${currentUser?.id}/subdomains`, payload);
		let newDomainInfo = domainsData && domainsData.find(x => x.value === subdomainName);
		let updatedSubdomainData = [...currentUserSubdomainData];
		if(newDomainInfo) { 
			updatedSubdomainData.push(newDomainInfo)
		}	
		setUserSubdomainData(updatedSubdomainData);
	};


	const assignRoleToUser = async(selectedIndex: string) => {
		let selectedData = selectedIndex.split('!');
		let selectedRoleName = selectedData[1];
		let selectedRoleID = selectedData[0];
	
		let payload = {
			id: selectedRoleID,
			name: selectedRoleName
		}
		
		await genericApiCall(HttpMethods.POST, `/adminportal/users/${currentUser?.id}/roles`, payload);

		console.log(selectedRoleID)
		showMessage("Please Wait...", `${selectedRoleName}  was successfully assigned to ${currentUser?.fullname}`)
	}

	const unassignRoleToUser = async(selectedIndex: string) => {
		let selectedData = selectedIndex.split('!');
		let selectedRoleName = selectedData[1];
		let selectedRoleID = selectedData[0];


		await genericApiCall(HttpMethods.DELETE, `/adminportal/users/${currentUser?.id}/roles/${selectedRoleID}`, {});

		showMessage("Please Wait...", `${selectedRoleName}  was successfully revoked from ${currentUser?.fullname}`)
	}

	useEffect(() => {
		(async () => {
			
			setDefaultRolesSubdomainsForCurrentUser();
			let allUsers = await genericApiCall(HttpMethods.GET, '/adminportal/users', {});
			setUsersList(allUsers);
			
			await getAllRoles()
		})();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser])

	useEffect(() => {
		(async () => {
			  let allUsers = await genericApiCall(HttpMethods.GET, '/adminportal/users', {});
			  setUsersList(allUsers);
			  if(usersList) {
				setCurrentUser(usersList[0]);
			  }
			  await getAllRoles();
			  await getAllSubdomains();
			  setDefaultRolesSubdomainsForCurrentUser();
		})();
	},[])
	

	return (
		<>
			<div className="bg-white m-2 p-2 shadow-sm pb-4">
				<Row>
					<Col span={8} className="px-3 py-0">

						<Divider orientation="left">All Colleagues</Divider>
						<Search placeholder="Search for a colleague..." allowClear onChange={e => filterUser(e.target.value)} />
						<div className="m-2" />

						<Menu defaultSelectedKeys={["0"]}>
							{usersList && usersList.map((user, key)=>(
								<>
									<Menu.Item 
										className="my-0" 
										key={key}
										onClick={(e) => setCurrentUser(user)}
									>
										{user.fullname}
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
								defaultValue={currentUserRole && currentUserRole}
								onSelect = {data => assignRoleToUser(data)}
								onDeselect = {(data) => unassignRoleToUser(data)}
							>
							{roles && roles.map((role)=>(
								<Option value={`${role.id}!${role.name}`} key={role.id}>{role.name}</Option>
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
									dataSource={currentUserSubdomainData}
									renderItem={subd => 
										<List.Item actions={[<Button size="small" type="link" key="remove-subdomain" onClick={() => removeSubdomainAccess(subd.value ,subd.id)}>Remove</Button>]}>
											{subd.value} 
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