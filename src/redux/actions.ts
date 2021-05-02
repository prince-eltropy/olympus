export const UPDATE_HEADER_TEXT = 'UPDATE_HEADER_TEXT';
export const FETCH_FEATURES_BASED_PERMISSIONS = 'FETCH_FEATURES_BASED_PERMISSIONS';
export const FETCH_FBP_SUCCESS = 'FETCH_FBP_SUCCESS';

export const GET_ALL_ROLES = 'GET_ALL_ROLES';

export const getAllRoles = () => ({
	type: GET_ALL_ROLES
})


export const updateHeaderText = (newHeading :string) => ({
	type: UPDATE_HEADER_TEXT,
	payload: { newHeading }
})

// FBP
export const fetchFeaturesBasedPermissions = () => ({ type: FETCH_FEATURES_BASED_PERMISSIONS});

export const fetchFBPSuccess = (payload : {}) => ({ type: FETCH_FBP_SUCCESS, payload });

