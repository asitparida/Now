import { Action } from './action';
import { combineReducers } from 'redux';
import { Store } from './store';

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
    news
});

export default Reducers;