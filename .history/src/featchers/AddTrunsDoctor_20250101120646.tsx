import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    addToNobatDoctor:[],
    nobatDay:[]
}
export  const FavaritDoctorReducer =createSlice({
    name:"FavaritDoctor",
    initialState,
    reducers:{
        AddNobatDay:(state  , action:PayloadAction<any>)=>{
           state.nobatDay.push(action.payload)
        },
     
    }
});

