import { useDispatch, useSelector } from "react-redux";
import { DoctorType } from "../servises/getDoctors";
import { toggleFavaritDoctor } from "../featchers/FavaritDoctorReducer";
import toast from "react-hot-toast";


interface TypeIsfavarit{
    favaritDoctor:{
        favaritDoctors:DoctorType[]
    } 
}
export default function IsFavaritProfilePage(doctor) {

    const {favaritDoctors} = useSelector((res:TypeIsfavarit)=>res.favaritDoctor);
    const isFavarit =  favaritDoctors.some((res)=>res.id === doctor?.id); 
    const dispatch = useDispatch();
    console.log(doctor);
    
    
    function handleHasFavarit() {
      if( favaritDoctors){
        dispatch(toggleFavaritDoctor(doctor));
      }
      else{
            toast.error("لطفا اول وارد شوید");
        }
    }


    
}
