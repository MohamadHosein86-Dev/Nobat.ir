import useDoctors from "../hooks/useDoctors";
import { specialties } from "../servises/filterspecialty";

export default function Home() {

  const {doctors ,isLoading}=useDoctors();
  
  function lenghfWords (text, wordLimit) {
     const words = text.split(" ");
      if (words.length <= wordLimit) return text;
       return words.slice(0, wordLimit).join(" ") + "..."; 
    }
    
  return (
    <section className="max-w-[68rem] mx-auto  px-[1.54rem] py-[1rem] md:px-[4rem] md:py-[2rem] ">
    <h1>{}</h1>
       <div className=" flex gap-[8rem]">
           <div>
              <ul className=" mr-[1.2rem]">
                {specialties.map((res)=> <li key={res} className=" list-disc mb-[1rem]">{res}</li>)}
              </ul>
           </div>
           <div>
                <ul className=" flex flex-wrap gap-[1rem]">{doctors?.map((res)=>
                   <li className=" w-[22rem] px-[2rem] border-stone-900 border-[1px] py-[3rem]" key={res.id}>
                      <h2 className=" font-semibold">{res.name}</h2>
                      <p className=" "><span>{res.specialty}</span></p>
                      <p>{lenghfWords(res.address , 3)}</p>
                      <img className=" w-2" src={res.image} alt="" />
                   </li>
              )}</ul>
           </div>
       </div>
    </section>
  )
}
