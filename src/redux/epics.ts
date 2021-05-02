import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fetchFBPSuccess, FETCH_FEATURES_BASED_PERMISSIONS, GET_ALL_ROLES } from './actions';
import { genericApiCall } from '../utils/services';
import HttpMethods from '../types/enums/HttpMethods';

export const fetchUserEpic = (action$: any) =>
	action$.pipe(
		ofType(GET_ALL_ROLES),
		mergeMap(async (action) => {
			let roles = await genericApiCall(HttpMethods.GET, '/adminportal/roles', {})
			roles.pipe(map((response) => console.log({ response })));
		}),
		catchError((err) => Promise.resolve({ type: 'FETCH_ERROR', message: err }))
	);
