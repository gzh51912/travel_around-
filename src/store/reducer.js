
import { combineReducers } from 'redux'

import list from '../components/list/reducer'
import cart from '../components/cart/reducer'

var reducer = combineReducers({
    list:list,
    cart:cart
})

export default reducer 