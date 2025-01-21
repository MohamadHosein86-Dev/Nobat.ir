import { useSelector } from "react-redux"
import useUser from "../hooks/useUser";
import { DoctorType } from "../servises/getDoctors";

interface TypeNobatDoctors{
  nobatDoctors:{
    addToNobatDoctor:DoctorType[],
    nobatDay:string[],
    isNobat:false
  }
}
export default function DoctorTurns() {

  const anyObjSector = useSelector((res:TypeNobatDoctors)=>res.nobatDoctors);
  const {user}=useUser();
  return (
    <div className="  max-w-[54rem]  px-[1.5rem] mx-auto flex items-center justify-between   md:px-[4rem] pt-[.7rem]  ">qqq
      <h1>{anyObjSector.addToNobatDoctor.map((res)=>res.name)}</h1>
    </div>
  )
}
