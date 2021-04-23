import { SubdomainFlow } from "../components/Subdomain";

export interface AddSubdomainProps {
	match: {params : {step : string}}
}
 
export const AddSubdomain: React.FC<AddSubdomainProps> = ({match}) => {
	const step = match.params.step;
	//NSD - new subdomain details
	return (
		<div className="bg-white m-4 p-4 pt-2 shadow-sm">
			<SubdomainFlow step={step} />
		</div> 
	);
}



	
	

	
 