import { createSlice, } from "@reduxjs/toolkit";

const initialState ={
    addToNobatDoctor:[],
    nobatDay:[],
    isNobat1:false
}
export  const NobatDoctorsReducer = createSlice({
    name:"NobatDoctors",
    initialState,
    reducers:{
        
        isNobatAccpet:( state )=>{
            state.isNobat1 = true;
        }
     
    }
});
export const {  isNobatAccpet } = NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer;