import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DoctorType } from "../servises/getDoctors";


const initialState ={
    favaritDoctors:[] as DoctorType[]
}

export  const FavaritDoctorReducer =createSlice({
    name:"FavaritDoctor",
    initialState,
    reducers:{
        toggleFavaritDoctor:(state  , action:PayloadAction<DoctorType>)=>{
            const hasDoctorTofavarit = state.favaritDoctors.some((doctor)=> doctor.id === action.payload.id);
            
            if(hasDoctorTofavarit){
                state.favaritDoctors = state.favaritDoctors.filter((res)=> res.id !== action.payload.id); 
            }
            else{
             state.favaritDoctors.push(action.payload);
            }
        },
        deleteFavaritDoctor:(state , action)=>{
            state.favaritDoctors = state.favaritDoctors.filter((res)=> res.id == action.payload)
        }
    }
});


export const { toggleFavaritDoctor , deleteFavaritDoctor } = FavaritDoctorReducer.actions;
export default FavaritDoctorReducer.reducer;
