import { RightOutlined,CheckCircleTwoTone } from '@ant-design/icons';
import { Select, Steps } from 'antd';
import { useState } from 'react';
import { connect } from 'react-redux';
// import { dispatch } from 'rxjs/internal/observable/pairs';
import { updateHeaderText } from '../../redux/actions';
import { AddSSL, AddBasicInfo, CnameMapping, Review } from '../../views/components/Subdomain';
const { Step } = Steps;
const SubdomainFlow = ({ step }) => {
	
	const flowComponents = [
		{
			path: undefined,
			title: 'ADD BASIC INFO',
			component: AddBasicInfo
		},
		{
			path: 'add-ssl-certificate',
			title: 'VALIDATION METHOD',
			component: AddBasicInfo
		},
		{
			path: 'cname-mapping',
			title: 'ADD TAGS',
			component: CnameMapping
		},
		{
			path: 'cname-mapping',
			title: 'ADD TAGS',
			component: CnameMapping
		}
	]

	var currentProgress = 0;
	if(step === "add-subdomain") {
		currentProgress = 0
	} else if(step === "add-ssl-certificate") {
		currentProgress = 1
	} else if(step === "cname-mapping") {
		currentProgress = 2
	} else if(step === "add-regex") {
		currentProgress = 3
	}

	const [byMethod, setByMethod] = useState(0);

	return (
		<>

			<Steps size="small" current={currentProgress} type="navigation" >
				<Step title="ADD BASIC INFO" />
				<Step title="ADD CERTIFICATE" />
				<Step title="VALIDATION METHOD" />
				<Step title="REVIEW & VALIDATE" />
			</Steps>

			<div className="p-3 py-4">
				{step === undefined ? 
					<AddBasicInfo />
				: null}

				{step === "add-ssl-certificate" ? 
					<AddSSL />
				: null} 

				{step === "cname-mapping" ?
					<CnameMapping setByMethod={setByMethod}  /> 
				: null}

				{step === "add-regex" ? 
					<Review byMethod={byMethod} setByMethod={setByMethod}  />
				: null}

			</div>
		</>
	);
}

const mapStateToProps = state => ({
	headerText: state.uiState.headerText,
});
const mapDispatchToProps = dispatch => ({
	updateHeading: headingText => dispatch(updateHeaderText(headingText))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(SubdomainFlow);