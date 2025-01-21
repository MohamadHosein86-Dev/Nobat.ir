

interface typeinput{
    handleLink:()=>void,
    titel:string
}

export default function LinkFooter({handleLink , titel}:typeinput) {
  function outSideclick(x: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    x.stopPropagation();
    handleLink();
  }
  return (  
    <div  className=" w-full bg-[#e5f9ff] pb-[1.3rem] pt-[1.3rem] mb-[-2rem]">
        <div  className=" md:px-[4rem] max-w-[68rem]  mx-auto  px-[1.5rem]   ">
            <button onClick={outSideclick}   className={` pb-[.4rem]  custom_shadow2  text-[#598a98] font-sans  "w-[100%]"  h-[2.3rem]  flex justify-center items-center rounded-[6px]  bg-[#fafafa]" `}>
                     {titel}
            </button>
        </div>
    </div> 
       
  )
}
