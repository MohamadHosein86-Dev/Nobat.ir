import { useDoctor } from "../hooks/useDoctor"
import Spinner from "./Spinner";

export default function PageDotor() {
    const {doctor , loadingDoctor}=useDoctor();

    if(loadingDoctor) return <Spinner />
    return (
    <section className=" max-w-[68rem]  px-[1.5rem] mx-auto py-[1rem] flex-col   md:px-[4rem] md:py-[2rem]">
      <div>
       <div>
        
        <div className=" flex gap-[1rem]">
          <div>
            <img src={doctor?.image} alt="" />
          </div>
          <div className=" ">
              <div className="flex gap-[.4rem]">
                  <h1 className=" font-medium text-[1.4rem]">{doctor?.name}</h1> 
                  <img className="mt-[.6rem] w-[1.6rem] h-[1.4rem]" src="	https://nobat.ir/public/ui_v2_0/images/uiv2/verified-icon.png" alt="" />
              </div>
              <h2 className="bg-[#f8feff] text-[#004d6c] font-medium mt-[1rem]  max-[12rem]"> متخصص {doctor?.specialty}</h2>
              {doctor?.accepting_patients && <div className=" mt-[1.3rem]"> <span className=" text-[.7rem] font-semibold text-[#bababa] ml-[.4rem]">نوبت دهی  </span> <span className=" pb-[.1rem] rounded-[4px] px-[.4rem]  text-[.8rem]  bg-[#75950c15]   text-[#75950cb3]"> اینترنتی</span></div>}
          </div> 
        </div>
         
       </div>
      </div>
    </section>
  )
}
