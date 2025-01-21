import useDoctors from "../hooks/useDoctors";
import { specialties } from "../servises/filterspecialty";

export default function Home() {

  const {doctors ,isLoading}=useDoctors();
  
  function lenghfWords (text, wordLimit) {
     const words = text.split(" ");
      if (words.length <= wordLimit) return text;
       return words.slice(0, wordLimit).join(" ") + "..."; 
    }
    /*
    display: inline-block;
    max-width: fit-content;
    padding: var(--xs-size) var(--sm-size);
    padding: var(--xs-size) var(--sm-size);
    font-size: .95rem;
    background-color: #f8feff;
    color: #004d6c;
    margin-top: var(--sm-size);
    white-space: nowrap;
   */
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

                   <li className=" border-[1px] border-solid border-[#ececec] flex flex-col justify-between w-[22rem] px-[1rem] py-[.5rem] h-[10.5rem]" key={res.id}>
                    <div className=" flex justify-between ">
                       <div className=" flex flex-col">
                        <div>
                          <h2 className=" text-lg font-semibold">{res.name}</h2>
                           <p className=" bg-[#f8feff] text-[#004d6c] mt-[1.5rem]  max-w-fit">متخصص {res.specialty}</p>
                        </div>
                      
                       </div>
                       
                        <img className=" mt-[.5rem] w-[5rem] h-[6rem] object-cover" src={res?.image} alt="" />
                    </div>
                      <div className=" flex justify-between items-center">
                        <p>{lenghfWords(res.address , 3)}</p>
                        <p>⭐⭐⭐⭐</p>
                      </div>
                   </li>

              )}</ul>
           </div>
       </div>
    </section>
  )
}
