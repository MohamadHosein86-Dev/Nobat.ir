import { useState } from "react";
import SpinnerMini from "./SpinerMini";

interface typePhone {
    phone:string 
}
export default function ShowPhone({phone}:typePhone) {
    const [showphone,setShowphone]=useState(false);
    const [isloading,setIsloading]=useState(false);
    const finalPhone = !showphone ?  `****${phone.slice(0 , -4)}` : phone; 
    function hanleShowPhone() {
        setIsloading(true);
        setTimeout(()=>{
            setShowphone(true);
            setIsloading(false);
        } , 1000)
    }

  return (
    <div className=" flex items-end flex-col w-[100%]">
    <div className=" mt-[1.5rem] flex justify-center gap-[.4rem] items-center  w-[12rem] px-[.4rem] py-[.5rem] bg-[#fbfbfb]">
      <span className=" font-medium text-[1.3rem]">{finalPhone}</span>
      <span >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ddd" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fafafa" className="size-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      </span> 
    </div>
    <div className=" w-[100%] flex gap-[1rem] mt-[1rem]">
      <button onClick={hanleShowPhone} className={` pt-[.2rem] flex items-center justify-center ${showphone && "hidden"} text-[#363636] w-[50%] lg:w-[12.5rem] px-[.4rem]   pb-[.3rem] sm:h-[2.5rem] h-[3rem lg:h-[] bg-[#efefef] `}>
            {isloading ? <SpinnerMini />: " نمایش کامل تلفن" }
        </button>
    </div>
  </div>
  )
}
