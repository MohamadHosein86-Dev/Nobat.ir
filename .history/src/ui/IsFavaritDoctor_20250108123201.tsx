import { useDispatch, useSelector } from "react-redux";
import { PositionType, WorkingHoursType } from "../servises/getDoctors";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";
import { toggleFavaritDoctor } from "../featchers/FavaritDoctorReducer";
import { useDoctor } from "../hooks/useDoctor";

interface DoctorType{   
  name: string; 
  specialty: string; 
  address: string; 
  phone: string; 
  image: string; 
  coordinates: PositionType; 
  rating: number; 
  id: string; 
  accepting_patients: boolean; 
  working_hours: WorkingHoursType[];
 
}
interface TypeIsfavarit{
    favaritDoctor:{
        favaritDoctors:DoctorType[]
    } 
}


export default function IsFavaritDoctor() {
    const dispatch = useDispatch();
    const {authenticatd} = useUser();
    const {doctor }=  useDoctor() ;


    const {favaritDoctors} = useSelector((res:TypeIsfavarit)=>res.favaritDoctor);
    const isFavarit = favaritDoctors.some((res)=>res.id === doctor.id);
    
    function handleHasFavarit() {
      if(authenticatd ){
            dispatch(toggleFavaritDoctor(doctor));
      }
      else{
        toast.error("لطفا اول وارد شوید");
      }
    }
  

  if(isFavarit)  return(
            <svg onClick={handleHasFavarit} xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5}  className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
  )
  else  return(
          <svg onClick={handleHasFavarit} xmlns="http://www.w3.org/2000/svg" fill="white" stroke="red" viewBox="0 0 24 24" strokeWidth={1.5}  className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
  )
}
