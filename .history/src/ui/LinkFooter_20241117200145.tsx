import React from 'react'

export default function LinkFooter() {
  return (
   
        <div className=" flex gap-[1rem] items-center justify-end mt-[2.2rem] ">
           <Link to="" className=" bg-[#fff] px-[.9rem] py-[1rem] rounded-md md:flex-grow-0 flex-grow flex justify-center items-center">
             <img className="w-[4.8rem] text-center" src="https://trustseal.enamad.ir/Content/Images/Star2/81.png?v=5.0.0.3777" alt="" />
          </Link>
           <Link to="" className=" bg-[#fff] px-[1.2rem] py-[1.1rem] md:flex-grow-0 rounded-md flex-grow flex justify-center items-center ">
                <img className=" w-[4.2rem] text-center" src="https://nobat.ir/public/ui_v2_0/images/uiv2/ecunion.png" alt="" />
           </Link>
          <Link to="" className=" bg-[#fff] px-[1.2rem] py-[1rem] rounded-[7px] md:flex-grow-0 flex-grow flex justify-center items-center">
               <img className="w-[6.5rem] text-center"  src="https://nobat.ir/public/ui_v2_0/images/uiv2/NSR.png" alt="" />  
           </Link>
       </div>
       
  )
}
