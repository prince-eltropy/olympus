const enum httpMethods {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

export const genericApiCall = async (reqMethod: httpMethods, reqEndpoint: string, reqPayload: {}) => {
	try {
		let genericResponse = await fetch(reqEndpoint, {
			method: reqMethod,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(reqPayload)
		});
		console.log(genericResponse);
	} catch (error) {
		console.log(error);
	}
	
}