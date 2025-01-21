import { cities } from "../servises/filterCity";

export default function MenuFilterCity() {
  return (
    <div>
      <input type="text" className=" input"/>
     <ul>
        {cities.map((res)=> <li key={res}>{res}</li>)}
     </ul>
    </div>
  )
}
