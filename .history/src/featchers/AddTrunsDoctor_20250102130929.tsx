import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    favaritDoctors:any
}
export  const FavaritDoctorReducer =createSlice({
    name:"FavaritDoctor",
    initialState,
    reducers:{
        toggleFavaritDoctor:(state  , action:any)=>{
           
        },
     
    }
});

