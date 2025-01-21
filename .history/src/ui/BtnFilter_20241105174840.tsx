interface typeBtnFilter{
    children :React.ReactNode ,
    onclick:()=>void
  }
export default function BtnFilter({children , onclick}:typeBtnFilter) {
  return (
    <button onClick={onclick} className=" flex items-center justify-center border-[1px] border-slate-300 py-[.75rem] px-[4rem] rounded-md w-full md:w-[10rem]">
       <span className="mt-[-.5rem]  pl-[35rem]  md:p-0"> {children}</span>
    </button>
  )
}
