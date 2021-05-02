import HttpMethods from "../../types/enums/HttpMethods";

export const genericApiCall = async (reqMethod: HttpMethods, reqEndpoint: string, reqPayload: {}) => {
	const reqOptions = reqMethod === HttpMethods.GET ? {method: reqMethod,
		headers: {'Content-Type': 'application/json'}} : {method: reqMethod,headers: {'Content-Type': 'application/json'},body: JSON.stringify(reqPayload)};

	try {
		let genericResponse = await fetch(reqEndpoint, reqOptions);

		if(genericResponse.status >= 200 && genericResponse.status < 399) {
			const genericJSONResult = await genericResponse.json();
			return genericJSONResult;
			// console.log(genericJSONResult); 
		} 
	} catch (error) {
		console.log(error);
	}
	
}