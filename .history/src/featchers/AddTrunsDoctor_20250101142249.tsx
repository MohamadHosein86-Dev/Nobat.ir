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
        },
        addToDoctorsNobat:( state , action )=>{
            state.addToNobatDoctor.push(action.payload)
        },
     
    }
});
export const {  isNobatAccpet , addToDoctorsNobat } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;