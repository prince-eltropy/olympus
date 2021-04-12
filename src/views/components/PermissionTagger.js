import { Tag } from 'antd';

const PermissionTagger = ({permString}) => {
	permString = permString.split('');

	return (
		<div>
			
			{parseInt(permString[0]) === 1 ? 
			<Tag color="green" className="m-1">CREATE</Tag> 
			: null}

			{parseInt(permString[1]) === 1 ? 
			<Tag color="geekblue" className="m-1">READ</Tag> 
			: null}
			
			{parseInt(permString[2]) === 1 ?
			<Tag color="orange" className="m-1">EDIT</Tag>
			: null}

			{parseInt(permString[3]) === 1 ? 
			<Tag color="red" className="m-1">DELETE</Tag> 
			: null}
			
		</div>
	);
}
 
export default PermissionTagger;