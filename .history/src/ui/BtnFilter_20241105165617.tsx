interface typeBtnFilter{
    children :React.ReactNode ,
    onclick:()=>void
  }
export default function BtnFilter({children , onclick}:typeBtnFilter) {
  return (
    <button onClick={onclick} className=" flex items-center justify-center border-[1px] border-slate-300 py-[.75rem] px-[4rem] rounded-md w-full md:w-[10rem]">
       <span className="mt-[-.5rem]  md:text-center"> {children}</span>
    </button>
  )
}
