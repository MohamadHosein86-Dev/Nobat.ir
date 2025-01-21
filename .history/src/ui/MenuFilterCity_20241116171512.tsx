import { useState } from "react"
import { useSearchParams } from "react-router-dom";


interface typeMneu{
  data:Array<string>;
  plasehoder:string;
  CloseModal:()=>void
}
export default function MenuFilterCity({data , plasehoder ,CloseModal}:typeMneu) {
  const [qurey ,setqurey] = useState("");
  const dataCityes = data.filter((item)=> qurey === "" ? item : item.includes(qurey));
  const [searchParams ,setsearchParams ]=useSearchParams();
 
  


  
  
  return (
    <div className=" bg-white px-[1.2rem] w-[100%] md:pt-[2rem] p-b[2rem] md:w-[26rem] before:content-['']  before:absolute before:top-[20px] before:w-[50px] before:left-[50%] before:translate-x-[-50%] before:h-[3px] before:bg-[#ccc] before:rounded-[40px]  ">
        <input value={qurey} onChange={(x)=>setqurey(x.target.value)} placeholder={plasehoder} type="text" className=" input sticky top-0 mt-[2rem] w-[100%] h-[1rem] rounded-lg"/>
        <ul className=" overflow-y-scroll h-[60rem]  menu">
          {data[0] !==  "قلب و عروق" && dataCityes.map((res)=> <li  onClick={()=>{ updatePrams("city",res) ;CloseModal()}} className=" cursor-pointer border-b-[1px] text-center py-[1rem] " key={res}>{res}</li>)}
          {data[0] !== "تهران"  &&   dataCityes.map((res)=> <li  onClick={()=>{ updatePrams("specialty",res) ;CloseModal()}} className=" cursor-pointer border-b-[1px] text-center py-[1rem] " key={res}>{res}</li>)} 
        </ul>
    </div>
  )
}
