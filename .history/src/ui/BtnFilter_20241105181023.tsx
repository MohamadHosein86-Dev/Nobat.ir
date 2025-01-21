import { FaChevronCircleDown } from "react-icons/fa"

interface typeBtnFilter{
    children :React.ReactNode ,
    onclick:()=>void
  }
export default function BtnFilter({children , onclick}:typeBtnFilter) {
  return (
    <button onClick={onclick} className=" flex md:items-center md:justify-center justify-between  border-[1px] border-slate-300 py-[.75rem] px-[1.5rem] rounded-md w-full md:w-[10rem]">
       <span className="mt-[-.5rem] "> {children}</span>
       <span className="mt-[-.5rem] "> <FaChevronCircleDown style={{background:"none"}} /> </span>
    </button>
  )
}
