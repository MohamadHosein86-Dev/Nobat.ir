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
     
    }
});

export default NobatDoctorsReducer.reducer;