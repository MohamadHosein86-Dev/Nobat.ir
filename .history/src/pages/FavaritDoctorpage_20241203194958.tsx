import { useSelector } from "react-redux";


interface HasFavaritType{
  favaritDoctor:{
      favaritDoctors:[]
  } 
}
export default function FavaritDoctor() {

  const {favaritDoctors} = useSelector((state:HasFavaritType)=> state.favaritDoctor);

  return (
      <div className="max-w-[54rem] flex gap-[2rem] px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:py-[2rem]">
           <div className=" w-[100%]">
              <span className=" flex-[1] bg-[#cdcdcd] h-[1px]"></span>
              <div className=" w-[100%] flex justify-center items-center">لیست مورد علاقه</div>
              <span></span>
           </div>
      </div>
  )
}
