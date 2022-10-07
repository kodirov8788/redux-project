import { createStore } from 'redux'

import Reducer from "./reducers/index"


const Store = createStore(Reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store