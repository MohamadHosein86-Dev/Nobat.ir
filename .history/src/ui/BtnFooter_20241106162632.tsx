import { Link } from "react-router-dom"

interface typeBtnLogin {
    children :React.ReactNode ,
    onclick:()=>void
}

export default function BtnFooter( {children , onclick} :typeBtnLogin) {
    
    return (
      <Link to="/" onClick={onclick} className="  font-light  md:w-[27rem] w-[100%] h-[2.7rem] border-[1px] border-stone-300 flex justify-center items-center rounded-[6px]  bg-footer-500">
          <span className=" text-stone-100 text-sm  pb-2  opacity-[.75] font-semibold"> {children}</span>
      </Link>
    )
}
  