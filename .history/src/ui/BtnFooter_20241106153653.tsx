import { Link } from "react-router-dom"

interface typeBtnLogin {
    children :React.ReactNode ,
    onclick:()=>void
}

export default function BtnFooter( {children , onclick} :typeBtnLogin) {
    
    return (
      <Link to="/" onClick={onclick} className="  font-light  md:w-[16rem] w-[100%] h-[2rem] border-[1px] border-stone-400 flex justify-center items-center rounded-[6px] bg-btnLogin-200">
          <span className=" text-stone-100 text-sm  pb-2  opacity-[.75] font-semibold"> {children}</span>
      </Link>
    )
}
  