import { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import SpinnerMini from "../ui/SpinerMini";


export default function SignUp() {
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [name ,setName] = useState("");

    const {signUp ,isLoading }=useSignUp();

      function handleLogin(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        if(!email && !password && !name) return null;
        signUp({email , password ,name},{onSettled:()=>{
          setPassword("");
          setEmail("");
        }});
    }

  const titelBtn = isLoading ? <SpinnerMini /> : <span className=" pb-[.4rem]"> ورود به حساب</span>;
  return (
    <section className=" flex justify-center  w-[100%] h-[100%]">
        <form onSubmit={handleLogin} className=" flex flex-col w-[24rem] h-[100vh] justify-center  ">
       
             <label className=" font-bold mb-[2rem] text-center" htmlFor="11">لطفا برای ساخت حساب ایمیل و پسورود خود را وارد کنید</label>
             <input onChange={(x)=>setEmail(x.target.value)} id="11"  placeholder=" jack@example.com..." className=" font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1rem] outline-none" type="email" value={email}  />
             
             <label className=" font-bold mb-[2rem] text-center" htmlFor="12">لطفا برای ساخت حساب  پسورود خود را وارد کنید</label>
             <input onChange={(x)=>setName(x.target.value)} id="12"  placeholder="jack..." className=" font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1rem] outline-none" type="text" value={} />

             <label className=" font-bold mb-[2rem] text-center" htmlFor="13">لطفا برای ساخت حساب  پسورود خود را وارد کنید</label>
             <input onChange={(x)=>setPassword(x.target.value)} id="13" minLength={3} maxLength={8} placeholder="password..." className=" font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1rem] outline-none" type="password" value={password} />

             <button className=" mt-[.8rem] mx-auto bg-[#cccc] flex items-center justify-center rounded-[4px] w-[7rem] text-[#ffff] h-[2.3rem] ">{titelBtn} </button>
        </form>
    </section>
  )
}
