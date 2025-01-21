import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { DoctorType } from "../servises/getDoctors";


interface TypeNobatDay{
    from:string,
    to:string
}
const initialState  ={
    doctorsNobat:[] as DoctorType[] ,
   
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
       
        addToNobat:( state=initialState , action)=>{
            state.doctorsNobat.push(action.payload)
        }
     
    }
});
export const {  addToNobat } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;