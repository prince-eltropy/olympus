import {
	ContactsOutlined, PhoneOutlined, MailOutlined, GlobalOutlined
  } from '@ant-design/icons';

const CustomerContact = ({contactData}) => {

	console.log(contactData);

	return (
		<>
			<div>
				<ContactsOutlined style={{fontSize:"1.4em"}} /> {contactData.poc}
			</div>
			<div>
				<PhoneOutlined style={{fontSize:"1.3em"}} />  {contactData.phone}</div>
			<div>
				<MailOutlined style={{fontSize:"1.2em"}} />  {contactData.mail}
			</div>
			<div>
				<GlobalOutlined style={{fontSize:"1.2em"}} />  {contactData.location}
			</div>
			
		</>
	);
}
 
export default CustomerContact;