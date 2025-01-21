import BtnFooter from "./BtnFooter";
//grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
export default function Footer() {
  return (
    <footer className=" mt-[10rem] px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem] bg-header-500 flex  h-[10rem] justify-center">
      <div className=" w-[80%] grid grid-cols-2 gap-[1rem , 2rem] ">
           <BtnFooter onclick={()=>{}}>d</BtnFooter>
           <BtnFooter onclick={()=>{}}>d</BtnFooter>
           <BtnFooter onclick={()=>{}}>d</BtnFooter>
           <BtnFooter onclick={()=>{}}>d</BtnFooter>
      </div>
    </footer>
  )
}
