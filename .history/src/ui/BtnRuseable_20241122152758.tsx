
interface titelType{
    titel:string,
}
export default function BtnRuseable({titel }:titelType) {
  return (
    <button className={` pb-[.4rem]  custom_shadow2  text-[#598a98] font-sans  "w-[100%]"  h-[2.3rem]  flex justify-center items-center rounded-[6px]  bg-[#fafafa]" `}>
            {titel}
    </button>
  )
}
