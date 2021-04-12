import { UPDATE_HEADER_TEXT } from './actions';

export const uiState = (state  = { headerText: "Home", backButton: false }, action) => {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_HEADER_TEXT: {
			const { newHeading } = payload;
			const newHeaderBar = {
				headerText: newHeading,
				backButton: false 
			}
			
			return newHeaderBar;
		}

		default:
			return state;
	}

	
}