import { createSlice, } from "@reduxjs/toolkit";
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
        
        addToDoctorNobat:( state  , action  )=>{
                console.log(action.payload);
                
                    state.doctorsNobat.push(action.payload);
                
        },
        addNobatDaayDoctors:( state=initialState , action)=>{
            state.nobatDay.push(action.payload)
        }
     
    }
});
export const {  addToDoctorNobat , addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;