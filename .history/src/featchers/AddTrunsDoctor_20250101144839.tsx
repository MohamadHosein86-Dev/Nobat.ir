import { createSlice, } from "@reduxjs/toolkit";
import { DoctorType } from "../servises/getDoctors";

interface TypeNobatDay{
from:string
}
const initialState ={
    addToNobatDoctor:[] as DoctorType[],
    nobatDay:[] as TypeNobatDay[],
    isNobat:false
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
        isNobatAccpet:( state=initialState )=>{
            state.isNobat = true;
        },
        addToDoctorsNobat:( state=initialState , action )=>{
            state.addToNobatDoctor.push(action.payload)
        },
        addNobatDaayDoctors:( state=initialState , action)=>{
            state.nobatDay.push(action.payload)
        }
     
    }
});
export const {  isNobatAccpet , addToDoctorsNobat , addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;