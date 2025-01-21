import { specialties } from "../servises/filterspecialty";

export default function Home() {

  return (
    <section className="max-w-[68rem] mx-auto mt-[20rem] px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem]">
        <div>
          <ul>
            {specialties.map((res)=> <li>{res}</li>)}
          </ul>
        </div>
        <div></div>
    </section>
  )
}
