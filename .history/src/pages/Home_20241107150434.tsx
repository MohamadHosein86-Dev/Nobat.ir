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
       <div className=" flex gap-[2rem]">
           <div>
              <ul className=" mr-[1.2rem]">
                {specialties.map((res)=> <li key={res} className=" list-disc mb-[1rem]">{res}</li>)}
              </ul>
           </div>
           <div>
                <ul className=" flex flex-wrap">{doctors?.map((res)=>
                   <li className=" w-[10rem]" key={res.id}>
                      <h2 className=" font-semibold">{res.name}</h2>
                      <p className=" "><span>{res.specialty}</span></p>
                      <p>{lenghfWords(res.address , 3)}</p>
                      <img src={res.image} alt="" />
                   </li>
              )}</ul>
           </div>
       </div>
    </section>
  )
}
