import { createSlice, PayloadAction, } from "@reduxjs/toolkit";


interface TypeNobatDay{
    from:string,
    to:string
}
const initialState  ={
    NobatDoctors:[] as TypeNobatDay[]
   
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
     
        addNobatDaayDoctors:( state=initialState , action)=>{
            const doctor = action.payload ;
            state.NobatDoctors.push(doctor)
        }
     
    }
});
export const {  addNobatDaayDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;