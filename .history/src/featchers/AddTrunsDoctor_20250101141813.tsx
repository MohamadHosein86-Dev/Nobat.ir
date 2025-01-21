import { createSlice, } from "@reduxjs/toolkit";
import { DoctorType } from "../servises/getDoctors";

const initialState ={
    addToNobatDoctor:[] as DoctorType[],
    nobatDay:[],
    isNobat:false
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
        isNobatAccpet:( state )=>{
            state.isNobat = true;
        }
     
    }
});
export const {  isNobatAccpet } = NobatDoctorsReducer.actions;
