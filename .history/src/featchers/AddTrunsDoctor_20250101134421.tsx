import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
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
        
        toggleDoctorNobat:( state = initialState , action : PayloadAction<string> )=>{
            const doctorId = action.payload;
            const doctorSelect = state.addToNobatDoctor.find((res)=>res.id === doctorId );

            if(doctorSelect){
                doc
            }
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