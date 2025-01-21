import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { DoctorType } from "../servises/getDoctors";


interface TypeNobatDay{
    from:string
}
const initialState ={
    doctors:[] as DoctorType[],
    nobatDay:[] as TypeNobatDay[],
    isNobat:false
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
        toggleDoctorNobat:( state = initialState , action : PayloadAction<string> )=>{
            const doctorId = action.payload;
            const doctorSelect = state.doctors.find((res)=>res.id === doctorId );

            if(doctorSelect){
                doc
            }
        },
        addToDoctorsNobat:( state=initialState , action )=>{
            state.doctors.push(action.payload)
        },
        addNobatDaayDoctors:( state=initialState , action)=>{
            state.nobatDay.push(action.payload)
        }
     
    }
});
export const {  addToDoctorsNobat , addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;