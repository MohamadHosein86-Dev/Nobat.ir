
interface titelType{
    titel:string,
    handleLink:()=>void
}
export default function BtnRuseable({titel ,handleLink}:titelType) {
  return (
    <button onClick={handleLink} className={` pb-[.3rem] custom_shadow2  text-[#598a98] font-sans w-[100%] h-[2.3rem]  flex justify-center items-center rounded-[6px]  bg-[#fafafa]" `}>
            {titel}
    </button>
  )
}
