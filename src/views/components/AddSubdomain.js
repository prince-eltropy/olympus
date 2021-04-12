import { useState } from "react";
import SubdomainFlow from "./SubdomainFlow"

export const AddSubdomain = ({match}) => {
	const step = match.params.step;
	//NSD - new subdomain details
	

	return (
		<>
			<div className="bg-white m-4 p-4 pt-2 shadow-sm">
				<SubdomainFlow step={step} />
			</div>
		</>
	);
}
 