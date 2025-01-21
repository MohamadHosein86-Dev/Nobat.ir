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
        
        addToDoctorNobat:( state = initialState  , action  )=>{     
            const doctor = action.payload;
            if(state.doctorsNobat.includes(doctor)){
                state.doctorsNobat.filter((res)=>res.id !== doctor.id)
            }
            else{
                state.doctorsNobat.push(doctor)
            }
          
        },
        addNobatDaayDoctors:( state=initialState , action)=>{
            state.nobatDay.push(action.payload)
        }
     
    }
});
export const {  addToDoctorNobat , addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;