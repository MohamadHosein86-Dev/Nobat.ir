import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { FavaritDoctorReducer } from './featchers/FavaritDoctorReducer';

const persistConfig = {
  key: 'root',
  storage,
}

export const rootReducer = combineReducers({
  favaritDoctor: FavaritDoctorReducer 
});
console.log(rootReducer);

const persistreducer = persistReducer(persistConfig , rootReducer);
 
const store = configureStore({
  reducer:persistreducer,
  middleware:(getDefaltMiddleWare)=> getDefaltMiddleWare({
    serializableCheck:false
  })
})

export const persistor = persistStore(store);
export default store;