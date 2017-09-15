import { combineEpics } from 'redux-observable';
import * as Rx from 'rxjs/Rx';
import * as Stubs from '../services/stubs';

const SPOOF_CALLS: Boolean = true;

const fetchNewsFulfilled = (payload: any) => ({
    type: 'NEWS_AVAIALABLE',
    delta: payload
});

const counterEpic = (action$: any) =>
    action$.ofType('INCREMENT_COUNTER')
        .delay(2000)
        .mapTo({ type: 'RESET_COUNTER' });

const imagerEpic = (action$: any) =>
    action$.ofType('CHANGE_IMAGE')
        .mergeMap((action: any) => {
            if (!SPOOF_CALLS) {
                const url = 'https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=manchester+united'
                    + '&mkt=en-in&count=20';
                const headers = {
                    'Ocp-Apim-Subscription-Key': 'd3d004b42bd346d3bcb5bf60582e58bf'
                };
                return Rx.Observable.ajax.get(url, headers).map(data => fetchNewsFulfilled(data.response));
            } else {
                return Rx.Observable.of(Stubs.News).map(data => fetchNewsFulfilled(data));
            }
        });

const Epics = combineEpics(counterEpic, imagerEpic);

export default Epics;