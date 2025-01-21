import { useLocation } from "react-router-dom";
import BtnFooter from "./BtnFooter";
//grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

export default function Footer() {
  const { pathname } =useLocation();

  return (
    <section className=" w-[100%]  bg-footer-500">

       <footer className=" max-w-[68rem] mx-auto mt-[10rem] px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem] flex  h-[20rem] justify-center">
          <div >
              <div className=" w-[100%] grid grid-cols-2 gap-x-[6rem] gap-y-[1rem] ">
                <BtnFooter onclick={()=>{}}>ورود</BtnFooter>
                <BtnFooter onclick={()=>{}}>عضویت پزشکان</BtnFooter>
                <BtnFooter onclick={()=>{}}>قوانین سایت</BtnFooter>
                <BtnFooter onclick={()=>{}}>تلفن های پشتیبان</BtnFooter>
              </div>
              <div className=" flex gap-1 items-center justify-end mt-[2.2rem]">
                  <a href="">
                    <img className="w-[2rem] h-[1rem]" src="https://Trustseal.eNamad.ir/logo.aspx?id=205461&Code=qLJz8VCvTrhuNCWUixxI" alt="" />
                 </a>
                  <a href="" className=" bg-[#fff] px-[1.2rem] py-[8rem] rounded-md">
                       <img src="https://nobat.ir/public/ui_v2_0/images/uiv2/ecunion.png" alt="" />
                  </a>
                 <a href="" className=" bg-[#fff] px-[1.7rem] py-[1.2rem] rounded-md">
                      <img src="https://nobat.ir/public/ui_v2_0/images/uiv2/NSR.png" alt="" />  
                  </a>
              </div>
          </div>
        </footer>
    </section>
  )
}
