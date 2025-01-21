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
       <div>
        
       </div>
    <div onClick={outSideclick}  className=" w-full bg-[#e5f9ff] pb-[1.3rem] pt-[1.3rem] mb-[-2rem]">
    </div> 
       
  )
}
