import BtnRuseable from "./BtnRuseable";



interface typeinput{
    handleLink:()=>void,
    titel:string
}

export default function LinkFooter({handleLink , titel}:typeinput) {

  return (  
    <div className=" w-full bg-[#e5f9ff] pb-[1.3rem] pt-[1.3rem] mb-[-2rem]">
        <div  className=" md:px-[4rem] max-w-[68rem]  mx-auto  px-[1.5rem]   ">
             <BtnRuseable >

             </BtnRuseable>
        </div>
    </div> 
       
  )
}
                    