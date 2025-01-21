import { Link, useLocation } from "react-router-dom";
import FavaritDoctor from "../pages/FavaritDoctorpage";
import useUser from "../hooks/useUser";
import { useSelector } from "react-redux";

interface HasFavaritType{
    favaritDoctor:{
        favaritDoctors:boolean
    } 
}
export default function HedarProfaile() {
   const {pathname}=useLocation(); 
   const {authenticatd}=useUser(); 
   const {favaritDoctors} =useSelector((state:HasFavaritType)=>state.favaritDoctor);


   const LinkFvaritDoctor = authenticatd && favaritDoctors.le &&
    <Link to={"/user.nobat.ir/favarite"} className=" w-[50%] custom_shadow5 bg-[#fbfbfb] flex items-center justify-center rounded-[1.1rem] flex-col-reverse p-[.5rem] ">
   <span> لیست مورد علاقه من</span>
   <span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5}  className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
       </svg>

   </span>
    </Link>;


    if(pathname === "/user.nobat.ir") return (
    <div className="max-w-[54rem] flex gap-[2rem] px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:py-[2rem]">
                <Link to={""} className=" w-[50%] custom_shadow5 bg-[#fbfbfb] flex items-center justify-center rounded-[1.1rem] flex-col-reverse p-[.5rem] ">
                    <span>پرسش و پاسخ</span>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(212, 212, 212)"}}>
                      <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>
                    </span>
                </Link>
                {LinkFvaritDoctor}
    </div>
    )
    if(pathname === "/user.nobat.ir/favarite") return (
        <FavaritDoctor />
    )
}
