import { useState } from "react"
import { useLocation, useNavigate, useParams, useSearchParams,  } from "react-router-dom";


interface typeMneu{
  data:Array<string>;
  plasehoder:string;
  CloseModal:()=>void
}
export default function MenuFilterCity({data , plasehoder ,CloseModal}:typeMneu) {
  const navigate =useNavigate();
  const {pathname}=useLocation();
  const {id}=useParams();
  
  const [qurey ,setqurey] = useState("");
  const dataCityes = data.filter((item)=> qurey === "" ? item : item.includes(qurey));
  const [searchParams , setSearchParams ]=useSearchParams();


 function updateFilter(key:string , value:string) {
  searchParams.set(key , value);
  setSearchParams(searchParams);
 }
 
 
 function handleCity(city:string) {
   CloseModal();
   if(pathname === "/101/" && "rules" ){
    navigate(`/?city=${city}`); 
  }
  if(pathname === "/"){
    updateFilter("city",city);
  }
   
 }
 function handleSpecialtis(specialty:string) {
  CloseModal();
  if(pathname === "/101/" && "/rules"){
    navigate(`/?specialty=${specialty}`); 
  }
  if(pathname === "/"){
    updateFilter("city",city);
  }
 }
  
  
  return (
    <div className=" bg-white px-[1.2rem] w-[100%] md:pt-[2rem] p-b[2rem] md:w-[26rem] before:content-['']  before:absolute before:top-[20px] before:w-[50px] before:left-[50%] before:translate-x-[-50%] before:h-[3px] before:bg-[#ccc] before:rounded-[40px]  ">
        <input value={qurey} onChange={(x)=>setqurey(x.target.value)} placeholder={plasehoder} type="text" className=" input sticky top-0 mt-[2rem] w-[100%] h-[1rem] rounded-lg"/>
        <ul className=" overflow-y-scroll h-[60rem]  menu">
          {data[0] !==  "قلب و عروق" ? dataCityes.map((res)=> <li  onClick={()=>{ handleCity(res)}} className=" cursor-pointer border-b-[1px] text-center py-[1rem] " key={res}>{res}</li>) :  dataCityes.map((res)=> <li  onClick={()=>handleSpecialtis(res)} className=" cursor-pointer border-b-[1px] text-center py-[1rem] " key={res}>{res}</li>)}
        </ul>
    </div>
  )
}
