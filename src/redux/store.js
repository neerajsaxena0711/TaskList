import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import taskReducer from "./reducers";
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

//Store designing starts with creating a reducer. 
//So all reducers should be imported here.


const persisConfig = {
    key:'root',
    storage: AsyncStorage
}

const rootReducer = combineReducers({taskReducer});

const persistedReducer = persistReducer(persisConfig, rootReducer);

const Store = createStore(persistedReducer, applyMiddleware(thunk));

export const Persistor = persistStore(Store);

export default Store;
