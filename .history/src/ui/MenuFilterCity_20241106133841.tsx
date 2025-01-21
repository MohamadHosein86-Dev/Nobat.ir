import { useState } from "react"



interface typeMneu{
  data:Array<string>;
  plasehoder:string;
}

export default function MenuFilterCity({data , plasehoder}:typeMneu) {
  const [qurey ,setqurey] = useState("");

  const dataCityes = data.filter((item)=> qurey.toLocaleLowerCase() === "" ? item : item.toLocaleLowerCase().includes(qurey));
 
  /*content: "";
  position: absolute;
  top: 20px;
  width: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
  background-color: #ccc;
  border-radius: 40px; */

  return (
    <div className=" bg-white px-[1.2rem] w-[100%] md:pt-[2rem] p-b[2rem] md:w-[26rem] before:content-[''] 
     before:absolute before:top-[20px] before:w-[50px] before:left-[50%] before:translate-x-[-50%] before:h-[3px] before:bg-[#ccc] before:rounded-[40px]  ">
       <span className=" flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
       </span>
      
      <input value={qurey} onChange={(x)=>setqurey(x.target.value)} placeholder={plasehoder} type="text" className=" input sticky top-0 mt-[2rem] w-[100%] h-[1rem] rounded-lg"/>
     <ul className=" overflow-y-scroll h-[60rem]  menu">
        {dataCityes.map((res)=> <li className=" border-b-[1px] text-center py-[1rem] " key={res}>{res}</li>)}
     </ul>
    </div>
  )
}
