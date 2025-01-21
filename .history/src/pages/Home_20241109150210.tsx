import { useSearchParams } from "react-router-dom";
import useDoctors from "../hooks/useDoctors";
import { specialties } from "../servises/filterspecialty";
import Spinner from "../ui/Spinner";

export default function Home() {
  const {doctors ,isLoading}=useDoctors();
  const [searchparams ,setSerchparams]=useSearchParams();

  const city = searchparams.get("city") ;
  const specialty = searchparams.get("specialty") ;
  const bothm = searchparams.get("city") || searchparams.get("specialty");
  console.log(bothm);
  

  function lenghfWords (text:string, wordLimit:number) {
    const words = text.split(" ");
     if (words.length <= wordLimit) return text;
      return words.slice(0, wordLimit).join(" ") + "..."; 
  }
  function handleFilter(specialty:string) {
    setSerchparams({specialty});
  }
  function handleupdateParams(filterKey:string, value:string) {
    searchparams.set(filterKey , value);
    setSerchparams(searchparams);
  }
  

  if(isLoading) return <Spinner />;
  if(!doctors) return <h1>متسفانه دکتری که گفتید وجود ندارد</h1>;

  return (
    <section className=" w-full">
     <div className="  max-w-[68rem] mx-auto  px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem]">
       <h1 className=" text-center text-[1.5rem] font-semibold text-[#044c6a] mb-[1.2rem] mt-[1.5rem]"> { city || specialty &&` لیست آدرس و تلفن ، پزشکان ${specialty == null ? "" : specialty} ، ${city === null ? "" :city} ` }</h1> 
       <div className=" w-[100%] flex  md:gap-[2.8rem]  ">
           <div>
              <ul className=" mr-[1.2rem] w-[11rem] hidden sm:block">
                {specialties.map((res)=> <li onClick={()=>{handleFilter(res); handleupdateParams("specialty" , res)}} key={res} className=" font-semibold text-[.9rem] cursor-pointer hover:text-[#363636] list-disc mb-[.8rem] text-[#363636ab] hover:font-semibold">{res}</li>)}
              </ul>
           </div>
           <div className="flex justify-center gap-4 md:mb-8">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-lg">
        <input
          type="text"
          placeholder="جستجوی نام پزشک، تخصص و..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`${ showInput ? "block" : "hidden" } h-10 md:h-12 w-full md:w-80 px-4 py-2 border rounded-md text-sm md:text-base transition-all duration-300 ease-in-out focus:outline-none}
        />
        
        {showInput ? (
          <button
            type="button"
            onClick={() => setShowInput(false)}
            className="p-3 w-10 h-10 md:w-12 md:h-12 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-500"
          >
            <FaTimes />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowInput(true)}
            className="p-3 w-10 h-10 md:w-12 md:h-12 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-500"
          >
            <IoSearchSharp />
          </button>
        )}

        {showInput && (
          <button
            type="submit"
            className="p-3 w-10 h-10 md:w-12 md:h-12 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-500"
          >
            <IoSearchSharp />
          </button>
        )}
      </form>
    </div>
       </div>
     </div>
    </section>
  )
}
