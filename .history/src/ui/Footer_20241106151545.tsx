import BtnLogin from "./BtnLogin";

export default function Footer() {
  return (
    <div className=" mt-[10rem] bg-header-500 flex  h-[30rem] justify-center">
      <BtnLogin onclick={()=>{}} size1={18} >ورود</BtnLogin>
      <BtnLogin onclick={()=>{}} size={18} >ورود</BtnLogin>
    </div>
  )
}
