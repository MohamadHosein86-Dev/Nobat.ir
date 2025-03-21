import { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import SpinnerMini from "../ui/SpinerMini";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    
    const navigate = useNavigate();
    
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [name ,setName] = useState("");
    const {signUp ,isLoading }=useSignUp();
    const {authenticatd}=useUser();
    
    function handleLogin(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        if(!email && !password && !name) return null;
        signUp({email , password ,name},{onSettled:()=>{
            setPassword("");
            setEmail("");
            setName("");
        }});

    }
    
     if(authenticatd){
         navigate("/");
     }

     const isfull = email.trim() !== "" && name.trim() !== "" && password.trim() !== "" 
  const titelBtn = isLoading ? <SpinnerMini /> : <span className=" pb-[.4rem]"> ورود به حساب</span>;
  return (
    <section className=" flex justify-center px-[1.5rem] w-[100%] h-[100%]">
        <form onSubmit={handleLogin} className=" flex flex-col w-full h-[100vh] justify-center  ">
       
             <label className=" font-bold mb-[2rem] text-center" htmlFor="11">لطفا برای ساخت حساب ایمیل خود را وارد کنید</label>
             <input onChange={(x)=>setEmail(x.target.value)} id="11"  placeholder=" jack@example.com..." className=" mx-auto font-bold text-[black] border-[1px] w-[30%] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[2rem] outline-none" type="email" value={email}  />
             
             <label className=" font-bold mb-[2rem] text-center" htmlFor="12">لطفا برای ساخت حساب  نام خود را وارد کنید</label>
             <input onChange={(x)=>setName(x.target.value)} id="12"  placeholder="jack..." className=" font-bold text-[black] border-[1px] border-[#dddd]  mx-auto
w-[30%] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[2rem] outline-none" type="text" value={name} />

             <label className=" font-bold mb-[2rem] text-center" htmlFor="13">لطفا برای ساخت حساب  پسورود خود را وارد کنید</label>
             <input onChange={(x)=>setPassword(x.target.value)} id="13" minLength={3} maxLength={8} placeholder="password..." className="   mx-auto
w-[30%] font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[3.5rem] outline-none" type="password" value={password} />

             <button className={` ${isfull ? " bg-blue-300" :"bg-[#cccc]"} transition ease-in delay-75 mt-[2rem] mx-auto bg-[#cccc] flex items-center justify-center rounded-[4px] w-[7rem] text-[#ffff] h-[2.3rem] `}>{titelBtn} </button>
        </form>
    </section>
  )
}
