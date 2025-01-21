import { Link } from "react-router-dom";



interface typeinput{
    handleLink:()=>void,
    titel:string
}

export default function LinkFooter({handleLink , titel}:typeinput) {
  function outSideclick(x: React.MouseEvent) {
    x.stopPropagation();
    handleLink();
  }
  return (  
       
       <div className=" ">
           <div onClick={outSideclick}  className="bg-[#e5f9ff] h-[6rem] w-full pb-[1.3rem] pt-[1.3rem] mb-[-2rem]">
           </div> 
         <div className="">
            <Link to={""}   className={` pb-[.4rem]  custom_shadow2  text-[#598a98] font-sans  "w-[100%]"  h-[2.3rem]  flex justify-center items-center rounded-[6px]  bg-[#fafafa]" to={""} `}>
                     {titel}
            </Link>
         </div>
       </div>
  )
}
