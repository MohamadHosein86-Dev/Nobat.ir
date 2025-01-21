import { useSearchParams } from "react-router-dom";
import useDoctors from "../hooks/useDoctors";
import { specialties } from "../servises/filterspecialty";
import Spinner from "../ui/Spinner";

export default function Home() {
  const {doctors ,doctors2 ,isLoading}=useDoctors();
  const [searchparams ,setSerchparams]=useSearchParams();

  const city = searchparams.get("city") ;
  const specialty = searchparams.get("specialty") ;
  

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
  if(!doctors) return <h1 className=" text-xl font-semibold  py-[6rem] text-center">متسفانه دکتری وجود ندارد</h1>;

  return (
    <section className=" w-full">
     <div className="  max-w-[68rem] mx-auto  px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem]">
       <h1 className=" text-center text-[1.5rem] font-semibold text-[#044c6a] mb-[1.2rem] mt-[1.5rem]"> { (city || specialty) &&` لیست آدرس و تلفن ، پزشکان ${specialty == null ? "" : specialty} ، ${city === null ? "" :city} ` }</h1> 
       <div className=" w-[100%] flex  md:gap-[2.8rem]  ">
           <div>
              <ul className=" mr-[1.2rem] w-[11rem] hidden sm:block">
                {specialties.map((res)=> <li onClick={()=>{handleFilter(res); handleupdateParams("specialty" , res)}} key={res} className=" font-semibold text-[.9rem] cursor-pointer hover:text-[#363636] list-disc mb-[.8rem] text-[#363636ab] hover:font-semibold">{res}</li>)}
              </ul>
           </div>
           <div className=" w-full">
             
                {doctors && <ul className=" w-full flex flex-wrap gap-[1rem]">{doctors?.map((res)=>

                   <li  className=" w-[100%] xl:w-[22rem] border-[1px] border-solid border-[#ececec] rounded-[.25rem] flex flex-col justify-between  px-[1rem] py-[.5rem] h-[11.5rem]" key={res.id}>
                    <div className=" flex justify-between ">
                       <div className=" flex flex-col">
                        <div>
                          <h2 className=" text-lg font-semibold pt-[.5rem]">{res.name}</h2>
                           <p className=" bg-[#f8feff] text-[#004d6c] mt-[1rem]  max-w-fit">متخصص {res.specialty}</p>
                           {res.accepting_patients && <div className=" mt-[1.3rem]"> <span className=" text-[.7rem] font-semibold text-[#bababa] ml-[.4rem]">نوبت دهی  </span> <span className=" pb-[.1rem] rounded-[4px] px-[.4rem]  text-[.8rem]  bg-[#75950c15]   text-[#75950cb3]"> اینترنتی</span></div>}
                        </div>
                      
                       </div>
                       
                        <img className=" mt-[.5rem] w-[5rem] h-[6rem] object-cover" src={res?.image} alt="" />
                    </div>
                      <div className=" flex justify-between items-center mb-[.5rem]">
                        <p className=" text-[#878787] text-[.8rem] font-semibold">{lenghfWords(res.address , 3)}</p>
                        <p> <span className="  text-[.7rem] text-[#878787] font-semibold">120 نفر </span> ⭐⭐⭐⭐</p>
                      </div>
                   </li>

                )}</ul>}

           </div>
       </div>

     </div>
    </section>
  )
}
