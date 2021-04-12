import { ajax } from 'rxjs/ajax';
import { mergeMap,map } from 'rxjs/operators';
import { ofType } from "redux-observable";
import { fetchUserFulfilled, FETCH_USER } from './actions';



export const fetchUserEpic = action$ => action$.pipe(
	ofType(FETCH_USER),
	mergeMap(action =>
	  ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
		map(response => fetchUserFulfilled(response))
	  )
	)
  );