import { useDoctor } from "../hooks/useDoctor"

export default function PageDotor() {
    const {doctor , loadingDoctor}=useDoctor();

    
    return (
    <section className=" max-w-[68rem]  px-[1.5rem] mx-auto py-[1rem] flex-col   md:px-[4rem] md:py-[2rem]">
      <div>
       <div>
          <div>
            <img src={doctor.i,a} alt="" />
          </div>
          <div></div>
       </div>
      </div>
    </section>
  )
}
