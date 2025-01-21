
interface typeBtnFilter{
    children :React.ReactNode ,
    onclick:()=>void
  }
export default function BtnFilter({children , onclick}:typeBtnFilter) {
  return (
    <button onClick={onclick} className=" flex md:items-center md:justify-center justify-between  border-[1px] border-slate-300 py-[.75rem] px-[1.5rem] rounded-md w-full md:w-[10rem] mb-[1rem]">
       <span className="mt-[-.3rem] "> {children}</span>
       <span className="md:hidden  "> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
           </svg>
      </span>
    </button>
  )
}
