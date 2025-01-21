import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import SpinnerMini from "../ui/SpinerMini";

export default function Login() {
 

        const [email ,setEmail] = useState("");
        const [name ,setName] = useState("");
        const [password ,setPassword] = useState("");
        const [error , setError]=useState(false);
        const {login ,} =useLogin();


        function handleLogin(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        if(!email && !password && !name) return null;
          setError(true)
        login({email , password ,name},{onSuccess:()=>{
          setPassword("");
          setEmail("");
          setName("");
          setError(false);
        }});
        }
        const titelBtn = error ? <SpinnerMini /> : <span className=" mb-[.5rem]">ورود</span>;
  return (
    <section className=" flex justify-center  w-[100%] h-[100%]">
        <form onSubmit={handleLogin} className=" flex flex-col w-[20rem] h-[100vh] justify-center  ">
           
                 <label className=" font-bold mb-[2rem] text-center" htmlFor="10">لطفاایمیل خود را وارد کنید</label>
                 <input onChange={(x)=>setEmail(x.target.value)} placeholder=" jack@example.com..." className=" font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1rem] outline-none" type="email" id="10" />
                 
                 <label className=" font-bold mb-[2rem] text-center" htmlFor="11">لطفا نام خود را وارد کنید</label>
                 <input onChange={(x)=>setName(x.target.value)} placeholder=" jack..." className=" font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1rem] outline-none" type="text" id="11" />
                 
                 <label className=" font-bold mb-[2rem] text-center" htmlFor="12">لطفا پسورد خود را وارد کنید</label>
                 <input onChange={(x)=>setPassword(x.target.value)}  minLength={3} maxLength={8} placeholder="password..." className=" font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1rem] outline-none" type="password" id="12" />

                <button type="submit" className=" mt-[.8rem] mx-auto bg-[#cccc] flex justify-center items-center rounded-[4px] w-[4.5rem] text-[#ffff] h-[2.3rem] ">{titelBtn}</button>
                <Link to={"/user.nobat.ir/signup"} className=" mt-[3rem] mx-auto bg-[#cccc] flex items-center justify-center rounded-[4px] w-[7rem] text-[#ffff] h-[2.3rem] pb-[.3rem]"> ساخت حساب</Link>
        
        </form>
    </section>
  )
}
