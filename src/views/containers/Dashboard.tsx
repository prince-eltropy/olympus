import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Route, Switch, useLocation } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import { connect } from 'react-redux';
import { DashboardRoutes } from '../../utils/routes/Routes';
import { updateHeaderText } from '../../redux/actions';
import { useEffect } from 'react';

const { Header, Content } = Layout;

export interface DashboardProps {
	headerText: string,
	setHeader: any
}
 
const Dashboard: React.FC<DashboardProps> = ({ headerText, setHeader}) => {
	const path = useLocation();
	
	useEffect(() => {
		// Setting HeaderBar Text
		let currentRouteInfo = DashboardRoutes.find(x =>  x.path === path.pathname)
		setHeader(currentRouteInfo?.header)
	},
	// eslint-disable-next-line react-hooks/exhaustive-deps
	[path.pathname]);
	return (
		<Layout style={{height:"100vh"}}>

			<SideMenu/>
			<Layout>

				<Header className="bg-white p-2 blg pl-4">
					<Title className="m-0">{headerText}</Title>
				</Header>
				
					<Content className="overflow-y vh-100 pb-0">
						<Switch> 

							{DashboardRoutes.map((route, key) => (
								<Route 
									key={key}
									path={route.path} 
									component={route.component} 
									exact={route.exact}  />
							))}

						</Switch>
					</Content>
				{/* <Footer>Footer</Footer> */}
			</Layout>
		</Layout>		
	);
}
 
const mapStateToProps = (state : { uiState : {headerText:string}}) => ({
	headerText: state.uiState.headerText,
	//isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch :any) => ({
	setHeader: (headerText :String) => dispatch(updateHeaderText(headerText))
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);