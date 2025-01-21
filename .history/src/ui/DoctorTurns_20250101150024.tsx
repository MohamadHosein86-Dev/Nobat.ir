import { useSelector } from "react-redux"
import useUser from "../hooks/useUser";

interface TypeNobatDoctors{
  nobatDoctors:{
    addToNobatDoctor:object[],
    nobatDay:string[],
    isNobat:false
  }
}
export default function DoctorTurns() {

  const anyObjSector = useSelector((res:TypeNobatDoctors)=>res.nobatDoctors);
  const {user}=useUser();
  return (
    <div className="  max-w-[54rem]  px-[1.5rem] mx-auto flex items-center justify-between   md:px-[4rem] pt-[.7rem]  ">qqq
      
    </div>
  )
}
