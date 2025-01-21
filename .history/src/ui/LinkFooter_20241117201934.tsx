import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDoctor } from "../hooks/useDoctor";

export default function LinkFooter(handleLink) {
    const {doctor}=useDoctor();
    const [searcgParams , setSearcgParams]=useSearchParams();
    const { pathname } =useLocation();

    
    const city = doctor?.address ? doctor?.address.split(" ")[0] : "";
    const cityFinal = city.replace(/،$/,"");  
    const speshilty = doctor ? doctor?.specialty : "";
  



  return (
   
    <div className=" w-full bg-[#e5f9ff] pb-[1.3rem] pt-[1.3rem] mb-[-2rem]">
    <div onClick={handleLink} className=" md:px-[4rem] max-w-[68rem]  mx-auto  px-[1.5rem]   ">
    <Link  to={""} className={` pb-[.4rem]  custom_shadow2  text-[#598a98] font-sans  "w-[100%]"  h-[2.3rem]  flex justify-center items-center rounded-[6px]  bg-[#fafafa]" to={""} `}>
      {pathname == "/" ?  "پرسش و پاسخ" : `لیست پزشکان ${doctor?.specialty} ، ${cityFinal}` }
    </Link>
    </div>
 </div> 
       
  )
}
