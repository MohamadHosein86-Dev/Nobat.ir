import { useState } from "react"
import {  useLocation, useNavigate, useSearchParams,  } from "react-router-dom";


interface typeMneu{
  data:Array<string>;
  plasehoder:string;
  CloseModal:()=>void,
}
export default function MenuFilterCity({data , plasehoder ,CloseModal }:typeMneu) {
  const navigate =useNavigate();
  const {pathname}=useLocation();

  
  const [qurey ,setqurey] = useState("");
  const dataCityes = data.filter((item)=> qurey === "" ? item : item.includes(qurey));
  const [searchParams , setSearchParams ]=useSearchParams();


 function updateFilter(key:string , value:string) {
  searchParams.set(key , value);
  setSearchParams(searchParams);
 }
 
 
 function handleCity(cityFilter:string ,city:string ) {
   CloseModal();
  if(pathname === "/101/" ){
    navigate(`/?${city}=${cityFilter}`); 
  }
  if(pathname === "/"){
    updateFilter(city ,cityFilter);
  }
   
 }
 function handleSpecialtis(specialtyFilter:string ,specialty:string) {
  CloseModal();
  if(pathname === "/101/"){
    navigate(`/?${specialty}=${specialtyFilter}`); 
  }
  if(pathname === "/"){
    updateFilter(specialty , specialtyFilter);
  }
  if(pathname === "/rules"){
    navigate(`/?${specialty}=${specialtyFilter}`)
  }
 }
  
  
  return (
    <div className=" bg-white px-[1.2rem] w-[100%] md:pt-[2rem] p-b[2rem] md:w-[26rem] before:content-['']  before:absolute before:top-[20px] before:w-[50px] before:left-[50%] before:translate-x-[-50%] before:h-[3px] before:bg-[#ccc] before:rounded-[40px]  ">
        <input value={qurey} onChange={(x)=>setqurey(x.target.value)} placeholder={plasehoder} type="text" className=" input sticky top-0 mt-[2rem] w-[100%] h-[1rem] rounded-lg"/>
        <ul className=" overflow-y-scroll h-[60rem]  menu">
          {data[0] !==  "قلب و عروق" ? dataCityes.map((city)=> <button  onClick={()=>{ handleCity(city , "city")}} className=" cursor-pointer border-b-[1px] text-center py-[1rem] " key={city}>{city}</button>) :   
          dataCityes.map((specialty)=> <button  onClick={()=>handleSpecialtis(specialty , "specialty")} className=" cursor-pointer border-b-[1px] text-center py-[1rem] " key={specialty}>{specialty}</button>)}
        </ul>
    </div>
  )
}
