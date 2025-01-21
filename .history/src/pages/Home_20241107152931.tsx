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
                   <li className=" flex justify-between w-[22rem] px-[1rem] py-[.5rem] border-stone-900 border-[1px] h-[9rem]" key={res.id}>
                    <div className=" flex flex-col ">
                    <h2 className=" font-semibold">{res.name}</h2>
                      <p className=" mb-[3rem]"><span>{res.specialty}</span></p>
                      <p>{lenghfWords(res.address , 3)}</p>
                    </div>
                      <img className=" w-[5rem] h-[6rem] object-cover" src={res?.image} alt="" />
                   </li>
              )}</ul>
           </div>
       </div>
    </section>
  )
}
