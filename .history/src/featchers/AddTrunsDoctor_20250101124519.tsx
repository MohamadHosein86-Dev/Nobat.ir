import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    addToNobatDoctor:[],
    nobatDay:[]
}
export  const NobatDoctorsReducer =createSlice({
    name:"FavaritDoctor",
    initialState,
    reducers:{
        AddNobatDay:(state  , action:PayloadAction<string>)=>{
           state.nobatDay.push(action.payload)
        },
     
    }
});

