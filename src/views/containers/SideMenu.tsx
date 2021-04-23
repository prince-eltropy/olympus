import {
	Image,
	Layout,
	Menu,
	Typography,
	Tag,
	Avatar,
	Divider,
	Tooltip,
} from 'antd';
import { SettingOutlined, CloudServerOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const { Sider } = Layout;
const { Title } = Typography;

export interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggle = () => {
		let toggleValue = collapsed === true ? false : true;
		setCollapsed(toggleValue);
	};

	return (
		<Sider
			width={250}
			theme='light'
			collapsible
			collapsed={collapsed}
			onCollapse={() => toggle()}>
			<Link to='/dashboard/manage-subdomains'>
				<Image src={logo} className='mt-4 logo' preview={false} />
			</Link>
			{!collapsed ? (
				<>
					<div className='text-center'>
						<Title level={4}>Launchpad</Title>
					</div>
					<Divider className='my-3' />
					<div className='p-4 py-0'>
						{/* Hi, Prince Mondol<br/> */}
						<Divider>
							Prince Mondol <br />
							<Tag color='#f50'>Engineering</Tag>
						</Divider>
					</div>
				</>
			) : (
				<>
					<Tooltip placement='right' title='Prince Mondol'>
						<Divider orientation='center'>
							<Avatar shape='circle' style={{ backgroundColor: '#f50' }}>
								PM
							</Avatar>
						</Divider>
					</Tooltip>
				</>
			)}

			<Menu mode='inline' defaultSelectedKeys={['3']}>
				{/* <Menu.Item key="1" icon={<HomeOutlined />}>
					<Link to="/dashboard">
						Home
					</Link>
				</Menu.Item> */}

				{/* <Menu.Item key="2" icon={<TeamOutlined />}>
					<Link to="/dashboard/manage-customers">
						Manage Customers
					</Link>
				</Menu.Item> */}

				<Menu.Item key='3' icon={<CloudServerOutlined />}>
					<Link to='/dashboard/manage-subdomains'>Manage Subdomains</Link>
				</Menu.Item>

				{/* <Menu.Item key="4" icon={<AreaChartOutlined />}>
				<Link to="/dashboard/analytics">
					Analytics
				</Link>
			</Menu.Item> */}
				<Menu.Item key='5' icon={<SettingOutlined />}>
					<Link to='/dashboard/manage-access'>Settings</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default SideMenu;
