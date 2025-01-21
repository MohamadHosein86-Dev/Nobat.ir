import { Link, useLocation } from "react-router-dom";
import BtnFooter from "./BtnFooter";

export default function Footer() {
  const { pathname } =useLocation();

  return (
    <section className=" w-[100%] mt-[2.5rem]  bg-footer-500  pb-[2rem]">
       <footer className=" max-w-[68rem] pt-[1.8rem]   mx-auto mt-[2rem] px-[1.5rem] md:px-[4rem]  md:pt-[2rem] flex justify-center">
          <div className=" w-[100%] ">
              <div className=" w-[100%] grid grid-cols-1 gap-x-[6rem] gap-y-[1rem]  lg:grid-cols-2">
                <BtnFooter onclick={()=>{}}>ورود</BtnFooter>
                <BtnFooter onclick={()=>{}}>عضویت پزشکان</BtnFooter>
                <BtnFooter onclick={()=>{}}>قوانین سایت</BtnFooter>
                <BtnFooter onclick={()=>{}}>تلفن های پشتیبان</BtnFooter>
              </div>
             {pathname === "/" &&
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
              }
          </div>
       </footer>

    </section>
  )
}
