import { useSelector } from "react-redux";
import { DoctorType } from "../servises/getDoctors";
import RednderImgageFavariteDoctors from "../ui/RednderImgageFavariteDoctors";

  
interface HasFavaritType{
  favaritDoctor:{
      favaritDoctors:DoctorType[]
  } 
}
export default function FavaritDoctor() {

  const {favaritDoctors} = useSelector((state:HasFavaritType)=> state.favaritDoctor);


  if(favaritDoctors.length !===0) return (
      <div className="max-w-[54rem] flex flex-col gap-[2rem] px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:pt-[1.5rem] md:pb-[1.5rem">
           <div className=" w-[100%] flex justify-center items-center gap-[1rem]">
              <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
              <div className=" w-[38.3%] text-[#cdcdcd]">لیست مورد علاقه</div>
              <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
           </div>
           <RednderImgageFavariteDoctors />
      </div>
  )
}
