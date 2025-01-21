interface typeBtnFilter{
    children :React.ReactNode ,
    onclick:()=>void
  }
export default function BtnFilter({children , onclick}:typeBtnFilter) {
  return (
    <button onClick={onclick} className=" flex items-center justify-center bg-red-400 py-[1.5rem] px-[4.5rem] rounded-sm">
        {children}
    </button>
  )
}
