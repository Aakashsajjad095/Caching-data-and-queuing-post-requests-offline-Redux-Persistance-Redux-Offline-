import React from 'react';
import { compose, createStore, applyMiddleware, combineReducers, composeWithDevTools, } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import AsyncStorage from '@react-native-async-storage/async-storage';
import propertyReducer from "../reducer/propertyReducer";
import storeLocalPropertyReducer from "../reducer/storeLocalPropertyReducer";




const rootReducer = combineReducers({
  homeP: propertyReducer,
  addpropL:storeLocalPropertyReducer,
})
// Middleware: Redux Persist Config



const persistConfig = {

  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'homeP',
    'addpropL',
  ],
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };