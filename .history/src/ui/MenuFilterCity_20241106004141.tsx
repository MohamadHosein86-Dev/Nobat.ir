import { useState } from "react"



interface typeMneu{
  data:Array<string>;
  plasehoder:string;
}

export default function MenuFilterCity({data , plasehoder}:typeMneu) {
  const [qurey ,setqurey] = useState("");

  const dataCityes = data.filter((item)=> qurey.toLocaleLowerCase() === "" ? item : item.toLocaleLowerCase().includes(qurey));
  return (
    <div className=" bg-white px-[1.2rem] w-[100%] md:pt-[2rem] p-b[2rem] md:w-[26rem]  ">
      <span >__</span>
      <input value={qurey} onChange={(x)=>setqurey(x.target.value)} placeholder={plasehoder} type="text" className=" input sticky top-0 mt-[2rem] w-[100%] h-[1rem] rounded-lg"/>
     <ul className=" overflow-y-scroll h-[60rem]  menu">
        {dataCityes.map((res)=> <li className=" border-b-[1px] text-center py-[1rem] " key={res}>{res}</li>)}
     </ul>
    </div>
  )
}
