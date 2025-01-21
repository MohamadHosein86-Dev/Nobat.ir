import { cities } from "../servises/filterCity";

export default function MenuFilterCity() {
  return (
    <div className=" bg-red-200 p-2 w-[22rem] ">
      <input type="text" className=" input"/>
     <ul>
        {cities.map((res)=> <li key={res}>{res}</li>)}
     </ul>
    </div>
  )
}
