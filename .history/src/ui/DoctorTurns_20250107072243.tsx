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

  const {nobatDay} = useSelector((res:TypeNobatDoctors)=>res.nobatDoctors);
  const {user}=useUser();
  
  return (
    <div className="  max-w-[54rem]  px-[1.5rem] mx-auto flex items-center justify-between   md:px-[4rem] pt-[.7rem]  ">qqq
      <div  className=" flex gap-[2rem] ">
          {nobatDay.map((res)=><>
            <span>
              از 
              {res.from}
              تا
              {res.to}
            </span>
          </>)}
         
      </div>
    </div>
  )
}
