import { Action } from './action';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import * as Rx from 'rxjs/Rx';

export namespace Store {
    export type Counter = { value: number };
    export type Imager = { imgSrc: string };
    export type News = { items: any[] };
    export type All = {
        counter: Counter,
        imager: Imager,
        news: News
    };
}

const initialState: Store.Counter = {
    value: 0,
};

const initialImagerState: Store.Imager = {
    imgSrc: 'http://bing.com/az/hprichbg/rb/CastlePointLH_EN-IN13433910394_1920x1080.jpg'
};

export function counter(state: Store.Counter = initialState, action: Action): Store.Counter {
    const { value } = state;
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            const newValue = value + action.delta;
            return { value: newValue };
        case 'RESET_COUNTER':
            return { value: 0 };
        default: break;
    }
    return state;
}
export function imager(state: Store.Imager = initialImagerState, action: Action): Store.Imager {
    switch (action.type) {
        case 'IMAGE_CHANGED':
            console.log(action);
            return { imgSrc: action.delta };
        default: break;
    }
    return state;
}
export function news(state: Store.News = { items: [] }, action: Action): Store.News {
    switch (action.type) {
        case 'NEWS_AVAIALABLE':
            console.log(action);
            if (action.delta.value && action.delta.value.length > 0) {
                return { items: action.delta.value };
            }
            break;
        default: break;
    }
    return state;
}
export const reducers = combineReducers<Store.All>({
    counter,
    imager,
    news
});

const fetchNewsFulfilled = (payload: any) => ({
    type: 'NEWS_AVAIALABLE',
    delta: payload
});

export const counterEpic = (action$: any) =>
    action$.ofType('INCREMENT_COUNTER')
        .delay(2000)
        .mapTo({ type: 'RESET_COUNTER' });

export const imagerEpic = (action$: any) =>
    action$.ofType('CHANGE_IMAGE')
        .mergeMap((action: any) => {
            const url = 'https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=manchester+united' 
            + '&mkt=en-in&count=20';
            const headers = {
                'Ocp-Apim-Subscription-Key': 'd3d004b42bd346d3bcb5bf60582e58bf'
            };
            return Rx.Observable.ajax.get(url, headers).map(data => fetchNewsFulfilled(data.response));
        });

export const epics = combineEpics(counterEpic, imagerEpic);