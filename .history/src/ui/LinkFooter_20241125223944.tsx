
interface typeinput{
    handleLink:()=>void,
    titel:string
}

export default function LinkFooter({handleLink , titel}:typeinput) {

  return (  
    <div className=" w-full bg-[#e5f9ff] pb-[1.3rem] pt-[1.3rem] mb-[-2rem]">
        <div  className=" md:px-[4rem] max-w-[68rem]  mx-auto  px-[1.5rem]   ">
               <a src="" onClick={handleLink} className={` decoration-black ${ titel == "" ? "" : `w-[100%]`} pb-[.4rem]  custom_shadow2  text-[#598a98] font-sans  h-[2.3rem]  flex justify-center items-center rounded-[6px]  bg-[#fafafa]" to={""} `}>
                     {titel}
               </a>
        </div>
    </div> 
       
  )
}
                    