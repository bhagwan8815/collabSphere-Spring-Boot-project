import { applyMiddleware , combineReducers , legacy_createStore } from "redux";

import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { ChatReducer } from "./Chat/Reducer";
import { commentReducer } from "./Comments/Reducer";
import issueReducer from "./Issue/Reducer";
import { subscriptionReducer } from "./Subscription/Reducer";
import { projectReducer } from "./Project/Reducer";

const rootReducer = combineReducers({
auth:authReducer,
project : projectReducer,
chat: ChatReducer,
comment : commentReducer,
issue : issueReducer,
subsctiption: subscriptionReducer,
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));