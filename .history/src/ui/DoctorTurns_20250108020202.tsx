import { useSelector } from "react-redux"
import useUser from "../hooks/useUser";
import { useState } from "react";

interface TyppeDoctor{
  name:string,
  specialty:string,
  from :string ,
   to:string,
  image:string,
  nobatDay:string,
}
interface TypeNobatDoctors{
  nobatDoctors:{
    NobatDoctors:TyppeDoctor[],
  }
}
export default function DoctorTurns() {

  const {NobatDoctors  } = useSelector((res:TypeNobatDoctors)=>res.nobatDoctors) ;
  const {user}=useUser();
  const [showFulNobat , setShowFulNobat] = useState(false);
  
  return (
    <section>
        <div className="max-w-[54rem] flex flex-col gap-[2rem] px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:pt-[1.5rem] md:pb-[1.5rem">
            <div className=" w-[100%] flex justify-center items-center gap-[1rem]">
                <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
                <div className=" w-[29%] text-[#cdcdcd]">نوبت های من</div>
                <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
            </div>
        </div>
        <div className="  max-w-[54rem]  px-[1.5rem] mx-auto flex items-center justify-between   md:px-[4rem] pt-[.7rem]  ">
        <div className=" flex flex-col  w-[100%] ">
          {NobatDoctors.map((resp)=>{
             return(
                <div onClick={()=>setShowFulNobat(true)}  className=" flex gap-[2rem] cursor-pointer pb-[1.2rem] border-b-[1px]  w-[100%] ">
                   <div className=" flex justify-between items-center  w-[100%] mt-[1.2rem] ">
                     <div className=" flex gap-[.5rem]">
                        <img className=" max-w-[3.5rem] h-[3.5rem] object-cover  " src={resp.image} alt="" />
                        <div>
                            <h2 className=" text-sm font-medium mb-[.4rem] text-[#3c4e00] "> {resp.name}</h2>
                            <p className=" text-sm font-medium  text-[#3c4e00] "> متخصص {resp.specialty}</p>
                        </div>
                     </div>
                     <div className=" flex flex-col items-center">
                        <span> از  {resp.from} تا {resp.to}</span>
                        <span>{resp.nobatDay}</span> 
                     </div>
                   </div>

                    <span>
                      
                    </span>
              </div>
             )
          })}      
        </div>
        </div>
    </section>
  )
}
