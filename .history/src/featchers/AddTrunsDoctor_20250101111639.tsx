import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { DoctorType } from "../servises/getDoctors";


interface TypeNobatDay{
    from:string
}

interface TypeInitialState{
    doctorsNobat:DoctorType[],
    nobatDay:TypeNobatDay[],
}
const initialState : TypeInitialState  ={
    doctorsNobat:[] ,
    nobatDay:[]
   
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
        addToDoctorNobat:( state = initialState , action  )=>{

                state.doctorsNobat.push(action.payload);
        },
        addNobatDaayDoctors:( state=initialState , action)=>{
            state.nobatDay.push(action.payload)
        }
     
    }
});
export const {  addToDoctorNobat , addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;