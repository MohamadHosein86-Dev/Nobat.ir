import { useDoctor } from "../hooks/useDoctor"

export default function PageDotor() {
    const {doctor , loadingDoctor}=useDoctor();

    
    return (
    <section className=" max-w-[68rem]  px-[1.5rem] mx-auto py-[1rem] flex-col   md:px-[4rem] md:py-[2rem]">
      <div>
       <div>
        
        <div className=" flex ">
          <div>
            <img src={doctor?.image} alt="" />
          </div>
          <div>
              <h1>{doctor?.name}</h1> 
          </div> 
        </div>
         
       </div>
      </div>
    </section>
  )
}
