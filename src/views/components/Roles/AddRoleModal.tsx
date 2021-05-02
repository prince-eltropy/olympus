import { Checkbox, Divider, Input, message, Modal } from 'antd';
import { useEffect, useState } from 'react';
import HttpMethods from '../../../types/enums/HttpMethods';
import { AddRoleModalProps } from '../../../types/props/rolesProps';
import { genericApiCall } from '../../../utils/services';

const AddRoleModal: React.FC<AddRoleModalProps> = ({
	getRoles,
	visible,
	toggleVisiblity,
	data,
}) => {
	const { role, access } = data;
	// console.log(role, access);
	const defaultCheckState = [
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
	];
	const [accessChecks, setAccessChecks] = useState(defaultCheckState);

	useEffect(() => {
		if (access) {
			let accessStr = access.join('');
			let accessArray = accessStr.split('');
			setAccessChecks(accessChecks);
		}
	}, [access]);

	const isChecked = (value: string): boolean => {
		// console.log(value);
		return value === '0' ? false : true;
	};

	const [roleName, setRoleName] = useState(role);

	const createRole = async () => {
		const payload = {
			name: roleName,
			access: [],
		};
		let createdRoleRes = await genericApiCall(
			HttpMethods.POST,
			'/adminportal/roles',
			payload
		);
		console.log(createdRoleRes);
		toggleVisiblity();
		getRoles();
		message.success(`Created ${roleName} successfully`);
	};

	return (
		<Modal
			title={role ? 'Update Role' : 'Create a New Role'}
			visible={visible}
			onOk={role ? toggleVisiblity : createRole}
			okText={role ? 'Update' : 'Create'}
			onCancel={toggleVisiblity}>
			<Input
				placeholder='Role Name'
				value={role}
				onChange={(e) => setRoleName(e.target.value)}
			/>

			<Divider orientation='left'>Customers</Divider>
			<Checkbox checked={isChecked(accessChecks[0])}>Create</Checkbox>
			<Checkbox>Read</Checkbox>
			<Checkbox>Update</Checkbox>
			<Checkbox>Delete</Checkbox>

			<Divider orientation='left'>Subdomains</Divider>
			<Checkbox>Create</Checkbox>
			<Checkbox>Read</Checkbox>
			<Checkbox>Update</Checkbox>
			<Checkbox>Delete</Checkbox>

			<Divider orientation='left'>Analytics</Divider>
			<Checkbox disabled>Create</Checkbox>
			<Checkbox>Read</Checkbox>
			<Checkbox disabled>Update</Checkbox>
			<Checkbox disabled>Delete</Checkbox>

			<Divider orientation='left'>Access</Divider>
			<Checkbox>Create</Checkbox>
			<Checkbox>Read</Checkbox>
			<Checkbox>Update</Checkbox>
			<Checkbox>Delete</Checkbox>
		</Modal>
	);
};

export default AddRoleModal;
