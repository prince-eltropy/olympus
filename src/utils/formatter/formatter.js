export const permissionTagger = (permString) => {
	permString = permString.split('');
	if(parseInt(permString[0]) === 1){
		console.log("Create");
	}
	if(parseInt(permString[1]) === 1){
		console.log("Read");
	}
	if(parseInt(permString[2]) === 1){
		console.log("Update");
	}
	if(parseInt(permString[3]) === 1){
		console.log("Delete");
	}
}