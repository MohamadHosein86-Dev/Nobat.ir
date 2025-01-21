import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  FavaritDoctorReducer  from './featchers/FavaritDoctorReducer';
import  NobatDoctorsReducer  from './featchers/AddTrunsDoctor';



const persistConfig = {
  key: 'root',
  storage,
}

export const rootReducer = combineReducers({
  favaritDoctor: FavaritDoctorReducer ,
  nobatDoctors:NobatDoctorsReducer
});


const persistreducer = persistReducer(persistConfig , rootReducer);
 
const store = configureStore({
  reducer:persistreducer,
  middleware:(getDefaltMiddleWare)=> getDefaltMiddleWare({
    serializableCheck:false
  })
})

export const persistor = persistStore(store);
export default store;