import { cities } from "../servises/filterCity";

export default function MenuFilterCity() {
  return (
    <div>
      <input type="text" />
     <ul>
        {cities.map((res)=> <li>{res}</li>)}
     </ul>
    </div>
  )
}
