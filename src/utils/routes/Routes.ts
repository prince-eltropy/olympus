import { AddSubdomain } from '../../views/containers/';
import CustomerDetails from '../../views/components/Customers/CustomerDetails';
import ManageCustomers from '../../views/components/Customers/ManageCustomers';
import Dashboard from '../../views/containers/Dashboard';
import { 
	Analytics,
	Login, 
	Settings,
	Subdomains} from '../../views/containers';
import { AddRegex } from '../../views/components/Subdomain';
import { Home } from '../../views/containers/Home';
import { SubdomainSettings } from '../../views/components/Subdomain/SubdomainSettings';


export interface RouteType {
	name: string,
	header: string,
	path: string,
	component: any,
	props: any,
	exact: boolean
}

export const MainRoutes : Array<RouteType> = [
	{
		name: 'Login',
		header: 'LOGIN',
		path: '/',
		component: Login,
		props: null,
		exact: true
	},
	{
		name: 'Dashboard',
		header: 'Home',
		path: '/dashboard',
		component: Dashboard,
		props: null,
		exact: false
	}
];

export const DashboardRoutes : Array<RouteType> = [
	{
		name: 'dashboardHome',
		header: 'Home',
		path: '/dashboard',
		component: Home,
		props: null,
		exact: true
	},
	{
		name: 'manageSubdomains',
		header: 'Manage Subdomains',
		path: '/dashboard/manage-subdomains',
		component: Subdomains,
		props: null,
		exact: true
	},
	{
		name: 'manageSubdomains',
		header: 'Manage Subdomains',
		path: '/dashboard/manage-subdomains/in-progress',
		component: Subdomains,
		props: null,
		exact: true
	},
	{
		name: 'manageSubdomains',
		header: 'Manage Subdomains',
		path: '/dashboard/manage-subdomains/recent',
		component: Subdomains,
		props: null,
		exact: true
	},
	{
		name: 'editSubdomains',
		header: 'Edit Subdomain',
		path: '/dashboard/manage-subdomains/edit/:id',
		component: SubdomainSettings,
		props: null,
		exact: false
	},
	{
		name: 'manageCustomers',
		header: 'Manage Customers',
		path: '/dashboard/manage-customers',
		component: ManageCustomers,
		props: null,
		exact: true
	},
	{
		name: 'analytics',
		header: 'Analytics',
		path: '/dashboard/analytics',
		component: Analytics,
		props: null,
		exact: false
	},
	{
		name: 'manageAccess',
		header: 'Settings',
		path: '/dashboard/manage-access',
		component: Settings,
		props: null,
		exact: false
	},
	{
		name: 'addSubdomainFlow',
		header: 'New Subdomain',
		path: '/dashboard/add-subdomain/:step',
		component: AddSubdomain,
		props: null,
		exact: false
	},
	{
		name: 'addSubdomain',
		header: 'New Subdomain',
		path: '/dashboard/add-subdomain/',
		component: AddSubdomain,
		props: null,
		exact: false
	},
	{
		name: 'customerDetails',
		header: 'customer details',
		path: '/dashboard/manage-customers/view/:cid',
		component: CustomerDetails,
		props: null,
		exact: false
	},
	{
		name: 'addToLoadBalancer',
		header: 'Add to Load Balancer',
		path: '/dashboard/manage-subdomain/addToLoadBalancer',
		component: AddRegex,
		props: null,
		exact: false
	}
];
