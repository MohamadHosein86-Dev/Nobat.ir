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
            const isDoctor = state.NobatDoctors.some((res)=>res.id === action.payload.id);

            if(isDoctor){
                state.NobatDoctors.filter((res)=>res.id !== action.payload.id);
            }
            else{
                state.NobatDoctors.push(doctor);
            }
        }
       
    }
});
export const {  addNobatDaayDoctors  } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer ;