import { Link, useLocation } from "react-router-dom";
import FavaritDoctor from "./FavaritDoctorpage";

export default function HedarProfaile() {
   const {pathname}=useLocation(); 
   
    if(pathname === "/user.nobat.ir") return (
    <div className="max-w-[54rem] flex  px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:py-[2rem]">
                <Link to={""} className=" w-[50%] custom_shadow5 bg-[#fbfbfb] flex items-center justify-center rounded-[1.1rem] flex-col-reverse p-[.5rem] ">
                    <span>پرسش و پاسخ</span>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(212, 212, 212)"}}>
                      <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>
                    </span>
                </Link>
                <Link to={""} className=" w-[50%] custom_shadow5 bg-[#fbfbfb] flex items-center justify-center rounded-[1.1rem] flex-col-reverse p-[.5rem] ">
                    <span>پرسش و پاسخ</span>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(212, 212, 212)"}}>
                      <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>
                    </span>
                </Link>
    </div>
    )
    if(pathname === "/user.nobat.ir/favarite") return (
        <FavaritDoctor />
    )
}
