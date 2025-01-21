import { cities } from "../servises/filterCity";

export default function MenuFilterCity() {
  return (
    <div className=" bg-slate-300 px-[1.5rem] w-[26rem] pt-[2rem] p-b[2rem] ">
      <input type="text" className=" input sticky top-0 mt-[2rem] w-[100%] h-[1rem]"/>
     <ul className=" overflow-y-scroll max-h-[60rem] ">
        {cities.map((res)=> <li className=" border-b-[1px] text-center py-[1rem]" key={res}>{res}</li>)}
     </ul>
    </div>
  )
}
