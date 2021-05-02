import { UPDATE_HEADER_TEXT } from './actions';

interface uiStateActionType {type: string, payload: {newHeading : string}}

export const uiState = (state  = { headerText: "Home", backButton: false }, action: uiStateActionType) => {
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