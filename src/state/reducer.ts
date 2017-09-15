import { Action } from './action';
import { combineReducers } from 'redux';
import { Store } from './store';

const initialState: Store.Counter = {
    value: 0,
};

const initialImagerState: Store.Imager = {
    imgSrc: 'http://bing.com/az/hprichbg/rb/CastlePointLH_EN-IN13433910394_1920x1080.jpg'
};

function counter(state: Store.Counter = initialState, action: Action): Store.Counter {
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
function imager(state: Store.Imager = initialImagerState, action: Action): Store.Imager {
    switch (action.type) {
        case 'IMAGE_CHANGED':
            return { imgSrc: action.delta };
        default: break;
    }
    return state;
}
function news(state: Store.News = { items: [] }, action: Action): Store.News {
    switch (action.type) {
        case 'NEWS_AVAIALABLE':
            if (action.delta.value && action.delta.value.length > 0) {
                return { items: action.delta.value };
            }
            break;
        default: break;
    }
    return state;
}
const Reducers = combineReducers<Store.All>({
    counter,
    imager,
    news
});

export default Reducers;