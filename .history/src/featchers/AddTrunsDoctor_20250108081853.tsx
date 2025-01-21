import { createSlice, PayloadAction, } from "@reduxjs/toolkit";


export interface TypeNobatDoctors{
    from:string,
    to:string,
    name : string ,
    specialty : string ,
    image : string ,
    nobatDay:string , 
    id:string,
    isDayNobat:boolean , 
    phone:string
}
const initialState  ={
    NobatDoctors:[] as TypeNobatDoctors[]
   
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
     
        addNobatDaayDoctors:( state=initialState , action:PayloadAction<TypeNobatDoctors>)=>{
            const doctor = action.payload ;
            state.NobatDoctors.push(doctor)
        }
        ,delefNobatDoctors:(state = initialState , action:PayloadAction<string>)=>{
           state.NobatDoctors =  state.NobatDoctors.filter((res)=>res.id !== action.payload);
        }
     
    }
});
export const {  addNobatDaayDoctors , delefNobatDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;