import { specialties } from "../servises/filterspecialty";

export default function Home() {

  return (
    <section>
        <div>
          <ul>
            {specialties.map((re))}
          </ul>
        </div>
        <div></div>
    </section>
  )
}
