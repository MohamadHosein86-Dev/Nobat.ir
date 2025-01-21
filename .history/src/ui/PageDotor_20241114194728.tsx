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
              <div>
                
              </div>
              <p className="bg-[#f8feff] text-[#004d6c] mt-[1rem]  max-w-fit">{doctor?.specialty}</p>
          </div> 
        </div>
         
       </div>
      </div>
    </section>
  )
}
