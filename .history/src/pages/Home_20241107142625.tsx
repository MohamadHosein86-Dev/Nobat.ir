import { specialties } from "../servises/filterspecialty";

export default function Home() {
  /*content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #ccc;
  border-radius: 50%;
  right: 0;
  top: 16px
  */
  return (
    <section className="max-w-[68rem] mx-auto  px-[1.54rem] py-[1rem] md:px-[4rem] md:py-[2rem]">
    <h1>{}</h1>
       <div>
           <div>
              <ul>
                {specialties.map((res)=> <li key={res} className=" list-disc">{res}</li>)}
              </ul>
           </div>
           <div>

           </div>
       </div>
    </section>
  )
}
