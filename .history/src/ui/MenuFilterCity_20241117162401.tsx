import { useState } from "react"
import { useLocation, useNavigate,  } from "react-router-dom";


interface typeMneu{
  data:Array<string>;
  plasehoder:string;
  CloseModal:()=>void
}
export default function MenuFilterCity({data , plasehoder ,CloseModal}:typeMneu) {
  const navigate =useNavigate();
  const {pathname}=useLocation();
  console.log(pathname);
  
  const [qurey ,setqurey] = useState("");
  const dataCityes = data.filter((item)=> qurey === "" ? item : item.includes(qurey));
  
 function name(params:type) {
  
 }
 function handleCity(city:string) {
   CloseModal();
  if(pathname === "/101/"){
    navigate(`/?city=${city}`); 
  }
   
 }
 function handleSpecialty(specialty:string) {
  CloseModal();
  if(pathname === "/101/"){
    navigate(`/?specialty=${specialty}`); 
  }
 }
  
  
  return (
    <div className=" bg-white px-[1.2rem] w-[100%] md:pt-[2rem] p-b[2rem] md:w-[26rem] before:content-['']  before:absolute before:top-[20px] before:w-[50px] before:left-[50%] before:translate-x-[-50%] before:h-[3px] before:bg-[#ccc] before:rounded-[40px]  ">
        <input value={qurey} onChange={(x)=>setqurey(x.target.value)} placeholder={plasehoder} type="text" className=" input sticky top-0 mt-[2rem] w-[100%] h-[1rem] rounded-lg"/>
          <h1 onClick={()=>handleCity("تهران")}>kosssssssss</h1>
        <ul className=" overflow-y-scroll h-[60rem]  menu">
          {data[0] !==  "قلب و عروق" && dataCityes.map((res)=> <li  onClick={()=>{ handleCity(res)}} className=" cursor-pointer border-b-[1px] text-center py-[1rem] " key={res}>{res}</li>)}
          {data[0] !== "تهران"  &&   dataCityes.map((res)=> <li  onClick={()=>handleSpecialty(res)} className=" cursor-pointer border-b-[1px] text-center py-[1rem] " key={res}>{res}</li>)} 
        </ul>
    </div>
  )
}
