import { Link, useLocation, useSearchParams } from "react-router-dom";
import BtnFooter from "./BtnFooter";
import { useDoctor } from "../hooks/useDoctor";


export default function Footer() {
  const { pathname } =useLocation();
  const {doctor}=useDoctor();
  const [searcgParams , setSearcgParams]=useSearchParams();

  
  const city = doctor?.address ? doctor?.address.split(" ")[0] : "";
  const cityFinal = city.replace(/،$/,"");

  const speshilty = doctor ? doctor?.specialty : "";

  
  function handleLink() {
   if (pathname === `/${doctor?.id}`){
      searcgParams.set("specialty" ,speshilty );
      setSearcgParams(searcgParams);
      searcgParams.set("city" ,cityFinal );
      setSearcgParams(searcgParams);
      
    }
  }

  return (
    <section className=" w-[100%] mt-[2.5rem]  bg-footer-500  pb-[2rem]">
       <div className=" w-full bg-[#e5f9ff] pb-[1.3rem] pt-[1.3rem]">
          <div onClick={handleLink} className=" md:px-[4rem] max-w-[68rem]  mx-auto  px-[1.5rem]   ">
          <Link  to={""} className={` pb-[.4rem]  custom_shadow2  text-[#598a98] font-sans  "w-[100%]"  h-[2.3rem]  flex justify-center items-center rounded-[6px]  bg-[#fafafa]" to={""} `}>
            {pathname == "/" ?  "پرسش و پاسخ" : `لیست پزشکان ${doctor?.specialty} ، ${cityFinal}` }
          </Link>
          </div>
       </div> 
       <footer className=" max-w-[68rem] pt-[1.8rem]   mx-auto mt-[2rem] px-[1.5rem] md:px-[4rem]  md:pt-[2rem] flex justify-center">
          <div className=" w-[100%] ">
              <div className=" w-[100%] grid grid-cols-1 gap-x-[6rem] gap-y-[1rem]  lg:grid-cols-2">
                <BtnFooter onclick={()=>{}}>ورود</BtnFooter>
                <BtnFooter onclick={()=>{}}>عضویت پزشکان</BtnFooter>
                <BtnFooter onclick={()=>{}}>قوانین سایت</BtnFooter>
                <BtnFooter onclick={()=>{}}>تلفن های پشتیبان</BtnFooter>
              </div>
            
          </div>
       </footer>

    </section>
  )
}
