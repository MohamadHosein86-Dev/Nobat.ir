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

  const {doctorsNobat} = useSelector((res:TypeNobatDoctors)=>res.nobatDoctors);
  const {user}=useUser();
  console.log(doctorsNobat.flatMap((res)=>res.working_hours).length);
  
  return (
    <div className="  max-w-[54rem]  px-[1.5rem] mx-auto flex items-center justify-between   md:px-[4rem] pt-[.7rem]  ">qqq
      <div  className=" flex gap-[2rem] ">
          <h1>{doctorsNobat.flatMap((res)=>res.working_hours).flatMap((res)=>res.time_slots).flatMap((res)=>res.to)}</h1>
         
      </div>
    </div>
  )
}
