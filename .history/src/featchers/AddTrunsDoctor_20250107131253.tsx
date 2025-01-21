import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { DoctorType } from "../servises/getDoctors";


export interface TypeNobatDoctors{
    from:string,
    to:string,
    name : string ,
    specialty : string ,
    image : string
}
const initialState  ={
    NobatDoctors:[] as DoctorType[]
   
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
     
        addNobatDaayDoctors:( state=initialState , action:PayloadAction<DoctorType>)=>{
            const doctor = action.payload ;
            state.NobatDoctors.push(doctor)
        }
     
    }
});
export const {  addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;