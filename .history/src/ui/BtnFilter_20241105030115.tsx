interface typeBtnFilter{
    children :React.ReactNode ,
    onclick:()=>void
  }
export default function BtnFilter({children , onclick}:typeBtnFilter) {
  return (
    <button onClick={onclick} className=" md:w[100%] flex items-center justify-center border-[1px] border-slate-300 py-[1.2rem] px-[4rem] rounded-md">
       <span className="mt-[-.5rem]"> {children}</span>
    </button>
  )
}
