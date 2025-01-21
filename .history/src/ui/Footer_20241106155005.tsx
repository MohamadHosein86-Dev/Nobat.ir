import BtnFooter from "./BtnFooter";
//grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
export default function Footer() {
  return (
    <section className=" w-[100%]  bg-header-500">

       <footer className=" max-w-[68rem] mx-auto mt-[10rem] px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem] flex  h-[10rem] justify-center">
         <div className=" w-[100%] grid grid-cols-2 gap-[2rem] ">
             <BtnFooter onclick={()=>{}}>d</BtnFooter>
             <BtnFooter onclick={()=>{}}>d</BtnFooter>
            <BtnFooter onclick={()=>{}}>d</BtnFooter>
            <BtnFooter onclick={()=>{}}>d</BtnFooter>
         </div>
        </footer>
    </section>
  )
}
