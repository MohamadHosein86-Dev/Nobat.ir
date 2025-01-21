import useDoctors from "../hooks/useDoctors";
import { specialties } from "../servises/filterspecialty";

export default function Home() {

  const {}=useDoctors

  return (
    <section className="max-w-[68rem] mx-auto  px-[1.54rem] py-[1rem] md:px-[4rem] md:py-[2rem]">
    <h1>{}</h1>
       <div>
           <div>
              <ul className=" mr-[1.2rem]">
                {specialties.map((res)=> <li key={res} className=" list-disc mb-[1rem]">{res}</li>)}
              </ul>
           </div>
           <div>
                <ul>{}</ul>
           </div>
       </div>
    </section>
  )
}
