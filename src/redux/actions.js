export const UPDATE_HEADER_TEXT = 'UPDATE_HEADER_TEXT';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';


export const updateHeaderText = newHeading => ({
	type: UPDATE_HEADER_TEXT,
	payload: { newHeading }
})

export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

