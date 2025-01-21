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
        
        toggleDoctorNobat:( state = initialState , action : PayloadAction<DoctorType> )=>{
            const doctorId = action.payload.id;
            const doctor = action.payload;

            if(!state.doctorsNobat.includes(doctor)){
                state.doctorsNobat.push(doctor);
            }
        },
        addNobatDaayDoctors:( state=initialState , action)=>{
            state.nobatDay.push(action.payload)
        }
     
    }
});
export const {  toggleDoctorNobat , addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;