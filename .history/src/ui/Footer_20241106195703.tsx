import { useLocation } from "react-router-dom";
import BtnFooter from "./BtnFooter";
//grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

export default function Footer() {
  const { pathname } =useLocation();

  return (
    <section className=" w-[100%]  bg-footer-500">

       <footer className=" max-w-[68rem] mx-auto mt-[10rem] px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem] flex  h-[20rem] justify-center">
          <div className="">
              <div className=" w-[100%] grid grid-cols-2 gap-x-[6rem] gap-y-[1rem] ">
                <BtnFooter onclick={()=>{}}>ورود</BtnFooter>
                <BtnFooter onclick={()=>{}}>عضویت پزشکان</BtnFooter>
                <BtnFooter onclick={()=>{}}>قوانین سایت</BtnFooter>
                <BtnFooter onclick={()=>{}}>تلفن های پشتیبان</BtnFooter>
              </div>
              <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
              </div>
          </div>
        </footer>
    </section>
  )
}
