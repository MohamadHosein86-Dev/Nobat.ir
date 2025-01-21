import { useState } from "react"
import { useSearchParams } from "react-router-dom";


interface typeMneu{
  data:Array<string>;
  plasehoder:string;
}
export default function MenuFilterCity({data , plasehoder}:typeMneu) {
  const [qurey ,setqurey] = useState("");
  const dataCityes = data.filter((item)=> qurey === "" ? item : item.includes(qurey));
  const [searchparams , setsearchparams] =useSearchParams();
  function handleFilter() {
    searchparams.set()
  }

  return (
    <div className=" bg-white px-[1.2rem] w-[100%] md:pt-[2rem] p-b[2rem] md:w-[26rem] before:content-['']  before:absolute before:top-[20px] before:w-[50px] before:left-[50%] before:translate-x-[-50%] before:h-[3px] before:bg-[#ccc] before:rounded-[40px]  ">
        <input value={qurey} onChange={(x)=>setqurey(x.target.value)} placeholder={plasehoder} type="text" className=" input sticky top-0 mt-[2rem] w-[100%] h-[1rem] rounded-lg"/>
        <ul className=" overflow-y-scroll h-[60rem]  menu">
          {dataCityes.map((res)=> <li onClick={handleFilter} className=" border-b-[1px] text-center py-[1rem] " key={res}>{res}</li>)}
        </ul>
    </div>
  )
}
