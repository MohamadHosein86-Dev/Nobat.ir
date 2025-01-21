import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    addToNobatDoctor:[],
    nobatDay:[],
    isNobat:false
}
export  const NobatDoctorsReducer =createSlice({
    name:"nobatDoctors",
    initialState,
    reducers:{
        AddNobatDay:(state  , action:PayloadAction<string>)=>{
           
        },
     
    }
});

export default NobatDoctorsReducer.reducer;