import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    addToNobatDoctor:[],
    nobatDay:[],
    isNobat:false
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

