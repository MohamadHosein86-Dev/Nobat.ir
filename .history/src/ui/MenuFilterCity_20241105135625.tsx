import { cities } from "../servises/filterCity";

export default function MenuFilterCity() {
  return (
    <div className=" bg-red-200 px-[10rem] w-[24rem] ">
      <input type="text" className=" input"/>
     <ul>
        {cities.map((res)=> <li key={res}>{res}</li>)}
     </ul>
    </div>
  )
}
