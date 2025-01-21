import { cities } from "../servises/filterCity";

export default function MenuFilterCity() {
  return (
    <div className=" bg-red-200 px-[1.5rem] w-[24rem] pt-[2rem] p-b[2rem]">
      <input type="text" className=" input"/>
     <ul>
        {cities.map((res)=> <li className=" text-center my-[2rem]" key={res}>{res}</li>)}
     </ul>
    </div>
  )
}
