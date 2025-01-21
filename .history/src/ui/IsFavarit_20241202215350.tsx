import { useDispatch, useSelector } from "react-redux";
import { addTofavaritDoctors, isFavarit } from "../featchers/FavaritDoctorReducer";

interface HasFavaritType{
    favaritDoctor:{
      hasFavarit:boolean
    }
  
  }
export default function IsFavarit() {
    const dispatch = useDispatch();
    const {hasFavarit} = useSelector((state:HasFavaritType)=>state.favaritDoctor);

    function handleHasFavarit() {
        dispatch(isFavarit());
        dispatch(addTofavaritDoctors(doctor))
      }
  
  return (
    <>
         {hasFavarit ?
                      <svg onClick={handleHasFavarit} xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5}  className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    :
                      <svg onClick={handleHasFavarit} xmlns="http://www.w3.org/2000/svg" fill="white" stroke="red" viewBox="0 0 24 24" strokeWidth={1.5}  className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                  }
    </>
  )
}
