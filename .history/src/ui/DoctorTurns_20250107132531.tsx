import { useSelector } from "react-redux"
import useUser from "../hooks/useUser";
import { DoctorType } from "../servises/getDoctors";

interface TypeNobatDoctors{
  nobatDoctors:{
    NobatDoctors:DoctorType[],
  }
}
export default function DoctorTurns() {

  const {NobatDoctors } = useSelector((res:TypeNobatDoctors)=>res.nobatDoctors);
  const {user}=useUser();
  
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
        <div className=" flex flex-col ">
          {NobatDoctors.flatMap((resp)=>{
             return(
                <div  className=" flex gap-[2rem]  ">
                   <div className=" flex flex-col">
                      <img className=" max-w-[3rem" src={resp.image} alt="" />
                      <div>
                        <h2>{resp.name}</h2>
                        <p> متخصص {resp.specialty}</p>
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
