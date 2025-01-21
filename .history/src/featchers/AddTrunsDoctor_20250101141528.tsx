import { createSlice, PayloadAction, } from "@reduxjs/toolkit";


interface TypeNobatDay{
    from:string
}
interface doctorType {
    id:string,
    name:string,
    image:string,
    specialty:string
}
interface TypeInitialState{
    doctors:doctorType[],
    nobatDay:TypeNobatDay[],
    isNobat:boolean
}
const initialState : TypeInitialState  ={
    doctors:[] ,
    nobatDay: [],
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