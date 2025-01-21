import BtnFooter from "./BtnFooter";
//grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
export default function Footer() {
  return (
    <footer className=" max-w-[68rem] mt-[10rem] px-[1.5rem] py-[1rem] md:px-[4rem] md:py-[2rem] bg-header-500 flex  h-[10rem] justify-center">
      <div className=" w-[100%] grid grid-cols-2 gap-[1rem] ">
           <BtnFooter onclick={()=>{}}>d</BtnFooter>
           <BtnFooter onclick={()=>{}}>d</BtnFooter>
           <BtnFooter onclick={()=>{}}>d</BtnFooter>
           <BtnFooter onclick={()=>{}}>d</BtnFooter>
      </div>
    </footer>
  )
}
