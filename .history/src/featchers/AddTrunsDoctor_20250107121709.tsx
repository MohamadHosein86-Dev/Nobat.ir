import { createSlice, } from "@reduxjs/toolkit";
import { DoctorType } from "../servises/getDoctors";


const initialState  ={
    NobatDoctors:[] as DoctorType[]
   
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
       
        addNobatDaayDoctors:( state=initialState , action)=>{
            state.NobatDoctors.push(action.payload)
        }
     
    }
});
export const {  addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;