
const initialState ={
    favaritDoctors:any
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
     
    }
});

