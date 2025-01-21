import { specialties } from "../servises/filterspecialty";

export default function Home() {

  return (
    <section>
        <div>
          <ul>
            {specialties.map((res)=> <li>{res}</li>)}
          </ul>
        </div>
        <div></div>
    </section>
  )
}
