import { useLocation } from "react-router-dom";
import BtnFooter from "./BtnFooter";
//grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

export default function Footer() {
  const { pathname } =useLocation();

  return (
    <section className=" w-[100%]  bg-footer-500">

       <footer className=" max-w-[68rem] mx-auto mt-[10rem] px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem] flex  h-[20rem] justify-center">
          <div className=" w-[100%]">
              <div className=" w-[100%] grid grid-cols-1 gap-x-[6rem] gap-y-[1rem]  xl:grid-cols-2">
                <BtnFooter onclick={()=>{}}>ورود</BtnFooter>
                <BtnFooter onclick={()=>{}}>عضویت پزشکان</BtnFooter>
                <BtnFooter onclick={()=>{}}>قوانین سایت</BtnFooter>
                <BtnFooter onclick={()=>{}}>تلفن های پشتیبان</BtnFooter>
              </div>
              <div className=" flex gap-[1rem] items-center justify-end mt-[2.2rem] ">
                  <a href="" className=" bg-[#fff] px-[.9rem] py-[1rem] rounded-md">
                    <img className="w-[4.8rem]" src="https://trustseal.enamad.ir/Content/Images/Star2/81.png?v=5.0.0.3777" alt="" />
                 </a>
                  <a href="" className=" bg-[#fff] px-[1.2rem] py-[1.2rem] rounded-md">
                       <img className=" w-[4.2rem]" src="https://nobat.ir/public/ui_v2_0/images/uiv2/ecunion.png" alt="" />
                  </a>
                 <a href="" className=" bg-[#fff] px-[1.2rem] py-[1rem] rounded-[7px]">
                      <img className="w-[6.5rem]"  src="https://nobat.ir/public/ui_v2_0/images/uiv2/NSR.png" alt="" />  
                  </a>
              </div>
          </div>
        </footer>
    </section>
  )
}
