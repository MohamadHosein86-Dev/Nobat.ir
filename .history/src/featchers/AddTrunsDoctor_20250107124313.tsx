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
            const doctor = action.payload
            state.NobatDoctors.push(doctor)
        }
     
    }
});
export const {  addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;