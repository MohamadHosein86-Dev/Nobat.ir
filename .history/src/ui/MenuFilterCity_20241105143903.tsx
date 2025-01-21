import { cities } from "../servises/filterCity";

export default function MenuFilterCity() {
  return (
    <div className=" bg-red-200 px-[1.5rem] w-[24rem] pt-[2rem] p-b[2rem] overflow-y-scroll max-h-[30rem]">
      <input type="text" className=" input sticky top-2"/>
     <ul >
        {cities.map((res)=> <li className=" border-b-[1px] text-center py-[1rem]" key={res}>{res}</li>)}
     </ul>
    </div>
  )
}
