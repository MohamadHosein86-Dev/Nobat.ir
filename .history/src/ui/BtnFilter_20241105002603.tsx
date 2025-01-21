interface typeBtnFilter{
    children :React.ReactNode ,
    onclick:()=>void
  }
export default function BtnFilter({children , onclick}:typeBtnFilter) {
  return (
    <button onClick={onclick} className=" flex items-center justify-center border-[1px] border-slate-300 py-[1.4rem] px-[4.5rem] rounded-md">
        {children}
    </button>
  )
}
