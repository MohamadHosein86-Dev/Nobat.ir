import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    addToNobatDoctor:[],
    nobatDay:""
}
export  const FavaritDoctorReducer =createSlice({
    name:"FavaritDoctor",
    initialState,
    reducers:{
        toggleFavaritDoctor:(state  , action:any)=>{
           
        },
     
    }
});

