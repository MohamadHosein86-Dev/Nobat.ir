import { useDoctor } from "../hooks/useDoctor"

export default function PageDotor() {
    const {doctor , loadingDoctor}=useDoctor();

    
    return (
    <section className=" max-w-[68rem]  px-[1.5rem] mx-auto py-[1rem] flex-col   md:px-[4rem] md:py-[2rem]">
      <div>
       <div>
        
        <div className=" flex gap-[1rem]">
          <div>
            <img src={doctor?.image} alt="" />
          </div>
          <div className=" flex gap-[.4rem]">
              <h1 className=" font-medium text-[1.4rem]">{doctor?.name}</h1> 
              <img className="mt-[.6rem] w-[1.6rem] h-[1.4rem]" src="	https://nobat.ir/public/ui_v2_0/images/uiv2/verified-icon.png" alt="" />
          </div> 
        </div>
         
       </div>
      </div>
    </section>
  )
}
