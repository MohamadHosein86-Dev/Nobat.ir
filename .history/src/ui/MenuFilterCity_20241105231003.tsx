import { useState } from "react"

interface typeMneu{
  data:Array<string> , plasehoder:string
}
export default function MenuFilterCity({data , plasehoder}:typeMneu) {
  const [qurey ,setqurey] = useState("");
  console.log(qurey);
  
  return (
    <div className=" bg-white px-[1.2rem] w-[26rem] pt-[2rem] p-b[2rem]  ">
      <input  onChange={(x)=>setqurey(x.target.value)} placeholder={plasehoder} type="text" className=" input sticky top-0 mt-[2rem] w-[100%] h-[1rem] rounded-lg"/>
     <ul className=" overflow-y-scroll max-h-[60rem]  menu">
        {data.map((res)=> <li className=" border-b-[1px] text-center py-[1rem]" key={res}>{res}</li>)}
     </ul>
    </div>
  )
}
