import { useLocation } from "react-router-dom"

export default function ProfileFooter() {
  const {pathname}=useLocation();

   if(pathname === "/user.nobat.ir" ) return (
        <div className="max-w-[54rem]  px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:py-[2rem]">
            <div className=" bg-[] border-[1px] border-[#ececec] rounded-[.625rem] h-[20rem]"></div>
        </div>
   )
   else return(
        <div className="max-w-[54rem]  px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:py-[2rem]">
            <div className=" bg-[] border-[1px] border-[#ececec] rounded-[.625rem] h-[20rem]"></div>
        </div>
   )
}
