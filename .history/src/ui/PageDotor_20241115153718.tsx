import { useDoctor } from "../hooks/useDoctor"
import Spinner from "./Spinner";

export default function PageDotor() {
    const {doctor , loadingDoctor}=useDoctor();

    const addres = doctor?.address;
   const cleanWord = addres ? addres.replace("،" , "") : "" ;
   const delWord = cleanWord ? cleanWord.split(" ") : "";
   const matab = delWord[2];

   const city = addres ? addres.split(" ") : "";
   const cityAdress = city[0];

    if(loadingDoctor) return <Spinner />
    return (
    <section className="">
      <div className=" max-w-[68rem] mx-auto  px-[1.5rem]  py-[1rem] flex-col   md:px-[4rem] md:pt-[1.8rem] md:pb-[.8rem]">
       
       <div className=" flex flex-col">
         <div className=" ">
        <div className=" flex gap-[1rem]">
          <div>
            <img src={doctor?.image} alt="" />
          </div>
          <div className=" ">
              <div className="flex gap-[.4rem]">
                  <h1 className=" font-medium text-[1.4rem]">{doctor?.name}</h1> 
                  <img className="mt-[.6rem] w-[1.6rem] h-[1.4rem]" src="	https://nobat.ir/public/ui_v2_0/images/uiv2/verified-icon.png" alt="" />
              </div>
              <h2 className="bg-[#f8feff]  text-[#004d6c] font-medium mt-[1rem]  w-[12rem]"> متخصص {doctor?.specialty}</h2>
              {doctor?.accepting_patients && <div className=" flex text-gray-500 mt-[1.3rem]">
                 <span className=" text-[.7rem] font-semibold text-[#bababa] ml-[.4rem]">نوبت دهی  </span>
                   <span className=" pb-[.1rem] rounded-[4px] px-[.4rem]  text-[.8rem]  bg-[#75950c15]   text-[#75950cb3] ml-[.5rem]"> اینترنتی</span> 
                   <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                   </svg>
                 </div>}
              
          </div> 
        </div>
         </div> 
       </div>
     
      </div>
      <div className=" w-[100%] h-[3.5rem] bg-[#f2f2f2]">
      </div>
      <div className="  max-w-[68rem] mx-auto  px-[1.5rem]  py-[1rem] flex-col   md:px-[4rem] md:py-[2rem]">
    <div className="flex justify-between items-center ">
            <div>
                  <div>
                    {doctor?.working_hours.map((res)=>(<div>{res.day}</div>))}
                  </div>
            </div>
            <div className="">
                <h3 className="bg-[#dff9ff]  text-[#004d6c] pt-[.4rem] pb-[.8rem] pr-[1.2rem] font-medium mt-[1rem]  w-[27rem]" >  مطب {matab}</h3>
                <div className=" flex justify-center items-center w-[3rem] pb-[.6rem] pt-[.2rem] h-[2.5rem] bg-[#f4f4f4] my-[1rem]">
                  <p className=" font-medium">{cityAdress}</p>
                </div>
                <h3 className=" font-medium">{doctor?.address}</h3>
                <div>
                  <button className=" w-[10rem] py-[2rem] bg-[#fbfbfb]"></button>
                  <div></div>
                </div>
            </div>
       </div>
      </div>
    </section>
  )
}
