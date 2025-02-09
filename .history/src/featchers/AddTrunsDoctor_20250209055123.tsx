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
    NobatDoctors:[] 
   
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
     
        addNobatDaayDoctors:( state=initialState , action:PayloadAction<TypeNobatDoctors>)=>{

            const doctor = action.payload;
            const exitDoctor = state.NobatDoctors.some((res)=> res.id === doctor.id );

            if(!exitDoctor){
                state.NobatDoctors.push();
            }
        }
        ,delefNobatDoctors:(state = initialState , action)=>{
            state.NobatDoctors =  state.NobatDoctors.filter((res)=>res.id !== action.payload);
        }
     
    }
});
export const {  addNobatDaayDoctors , delefNobatDoctors } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;