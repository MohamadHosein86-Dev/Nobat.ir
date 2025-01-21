interface typeBtnFilter{
    children :React.ReactNode ,
    onclick:()=>void
  }
export default function BtnFilter({children , onclick}:typeBtnFilter) {
  return (
    <button onClick={onclick} className=" bg-red-400 py-[1rem] px-[8rem]">
        {children}
    </button>
  )
}
