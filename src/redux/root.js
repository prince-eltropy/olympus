import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from './epics';
import { uiState } from "./reducers";

export const rootEpic = combineEpics(
  fetchUserEpic
);

export const rootReducer = combineReducers({
	uiState,
});