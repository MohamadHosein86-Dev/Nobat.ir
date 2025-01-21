import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function User() {
  const {authenticatd} =useUser();
  
  if(!authenticatd) return null;
  if (authenticatd) return (
       <div className=" bg-[#00748e] ">
        <div className="max-w-[68rem] font-semibold pb-[1.3rem] pt-[1rem] items-center text-[.9rem] gap-[1.5rem] h-[2rem] text-[#fafafa] flex  mx-auto md:px-[4rem] ">
            <Link to={"/user.nobat.ir"} className=" relative afterLink cursor-pointer">(پروفایل)</Link>
            <Link to={"user.nobat.ir/favarite"} className=" relative afterLink1 cursor-pointer">لیست من</Link>
            <Link to={"user.nobat.ir/turns"} className=" cursor-pointer">نوبت های من</Link>
        </div>
       </div>
  )
}
