import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    addToNobatDoctor:[],
    nobatDay:[],
    isNobat1:false
}
export  const NobatDoctorsReducer =createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        AddNobatDay:(state  , action:PayloadAction<string>)=>{
           
        },
        isNobatAccpet:( state )=>{
            state.isNobat1 = true;
        }
     
    }
});
export const { AddNobatDay , isNobatAccpet } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer;