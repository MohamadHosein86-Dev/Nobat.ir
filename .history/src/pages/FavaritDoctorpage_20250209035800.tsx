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


   return (
      <div className="max-w-[54rem] flex flex-col gap-[2rem] px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:pt-[1.5rem] md:pb-[1.5rem">
           <div className=" w-[100%] flex justify-center items-center gap-[1rem]">
              <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
              <div className=" w-[38.3%] text-[#cdcdcd]">لیست مورد علاقه</div>
              <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
           </div>
           {favaritDoctors.length !== 0 ? 
              <RednderImgageFavariteDoctors /> 
              :
              <div className="  flex flex-col ">
                  <svg  fill="#6c757d65" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{fontSize:"1.75rem"}}><path fill-rule="evenodd" d="M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path></svg>
                  <h2 className=" text-[#6c757d65] ">پزشکی در لیست علاقه مندی های شما وجود ندارد</h2>
              </div>
           }
      </div>
  )
}
