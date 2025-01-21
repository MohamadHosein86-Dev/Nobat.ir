import { Link } from "react-router-dom"
import useUser from "../hooks/useUser";

interface typeBtnLogin {
    children :React.ReactNode ,
    onclick:()=>void,
    to:string
}

export default function BtnFooter( {children , onclick , to} :typeBtnLogin) {
    const {authenticatd}=useUser();
    if(children === "ورود" && authenticatd) return null;
    return (
      <Link to={to} onClick={onclick} className="custom_shadow1 text-[#fff] font-light  lg:w-[100%] w-[100%] h-[2.7rem]  flex justify-center items-center rounded-[6px]  bg-footer-500">
          <span className=" text-sm  pb-2  font-semibold"> {children}</span>
      </Link>
    )
}
  