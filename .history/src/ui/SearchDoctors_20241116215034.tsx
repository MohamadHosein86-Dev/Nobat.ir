import { lenghfWords } from "../HelperFunction/lenghWords";
import useDoctors from "../hooks/useDoctors"

export default function SearchDoctors() {
  const {searchDoctors } =useDoctors();
  return (
    <div>
      <ul className=" w-full flex flex-wrap gap-[1rem]">{doctors?.map((res)=>
                   <li onClick={()=>navigate(`/${res.id}`)}  className=" cursor-pointer w-[100%] xl:w-[22rem] border-b-[1px] border-b-[#ececec] md:border-[1px] md:border-solid md:border-[#ececec] rounded-[.25rem] flex flex-col justify-between  px-[1rem] py-[.5rem] h-[11.5rem]" key={res.id}>
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
                )}</ul>
    </div>
  )
}
