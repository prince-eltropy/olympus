import { createStore, applyMiddleware, compose } from "redux";

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from "./root";

const epicMiddleware = createEpicMiddleware();

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
	
	const store = createStore(
		rootReducer,
		composeEnhancers (
			applyMiddleware(epicMiddleware)
		)
	);
	epicMiddleware.run(rootEpic);
	return store;
	
}


export default configureStore;