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
    <div className="  max-w-[54rem]  px-[1.5rem] mx-auto flex items-center justify-between   md:px-[4rem] pt-[.7rem]  ">
      <div class="max-w-[54rem] flex flex-col gap-[2rem] px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:pt-[1.5rem] md:pb-[1.5rem"><div class=" w-[100%] flex justify-center items-center gap-[1rem]"><span class=" w-[100%] bg-[#cdcdcd] h-[1px]"></span><div class=" w-[38.3%] text-[#cdcdcd]">لیست مورد علاقه</div><span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span></div></div>
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
