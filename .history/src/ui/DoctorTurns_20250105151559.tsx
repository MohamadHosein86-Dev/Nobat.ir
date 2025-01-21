import { useSelector } from "react-redux"
import useUser from "../hooks/useUser";
import { DoctorType } from "../servises/getDoctors";

interface TypeNobatDoctors{
  nobatDoctors:{
    doctorsNobat:DoctorType[],
    nobatDay:string[],
  }
}
export default function DoctorTurns() {

  const anyObjSector = useSelector((res:TypeNobatDoctors)=>res.nobatDoctors);
  const {user}=useUser();
  return (
    <div className="  max-w-[54rem]  px-[1.5rem] mx-auto flex items-center justify-between   md:px-[4rem] pt-[.7rem]  ">qqq
      <h1>{anyObjSector.doctorsNobat.map((res)=>res.working_hours).map((res)=>res)}</h1>
    </div>
  )
}
