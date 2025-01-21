import { useDoctor } from "../hooks/useDoctor"

export default function PageDotor() {
    const {doctor , loadingDoctor}=useDoctor();
    
    return (
    <section className=" max-w-[68rem]  px-[1.5rem] mx-auto py-[1rem] flex-col   md:px-[4rem] md:py-[2rem]">
      <div>
        {doctor?.map((item)=> (
          <div>
              <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}
