import { createStore } from "redux";
import AddUserId from "./reducers/UserReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = { 
    key:'root',
    storage,
 }
 const persistedReducer = persistReducer(persistConfig,AddUserId)


export default createStore(persistedReducer)