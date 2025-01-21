import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { DoctorType } from "../servises/getDoctors";


interface TypeNobatDay{
    from:string,
    to:string
}
const initialState  ={
    doctorsNobat:[] as DoctorType[] ,
    nobatDay:[] as TypeNobatDay[]
   
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
        addToDoctorNobat:( state = initialState  , action :PayloadAction<DoctorType>  )=>{
            if(state.doctorsNobat.includes(action.payload.id)){
                state.doctorsNobat.filter((res)=>res.id !== action.payload.id)
            }
        },
        addNobatDaayDoctors:( state=initialState , action)=>{
            state.nobatDay.push(action.payload)
        }
     
    }
});
export const {  addToDoctorNobat , addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;