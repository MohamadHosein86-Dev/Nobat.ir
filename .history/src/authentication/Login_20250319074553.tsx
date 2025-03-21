import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import SpinnerMini from "../ui/SpinerMini";
import useUser from "../hooks/useUser";

export default function Login() {

        const navigate = useNavigate();

        const [email ,setEmail] = useState("");
        const [name ,setName] = useState("");
        const [password ,setPassword] = useState("");
        const {login ,isLoading} =useLogin();
        const {authenticatd}=useUser();

        function handleLogin(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        if(!email && !password && !name) return null;
        login({email , password ,name},{onSuccess:()=>{
          setPassword("");
          setEmail("");
          setName("");
        }});
        }
        const titelBtn = isLoading ? <SpinnerMini /> : <span className=" mb-[.5rem]">ورود</span>;
        if(authenticatd){
            navigate("/");
        }
        const isfull = email.trim() !== "" && name.trim() !== "" && password.trim() !== "" ;
  return (
    <section className=" flex justify-center  w-[100%] h-[100%]">
        <form onSubmit={handleLogin} className=" flex flex-col w-full h-[100vh] justify-center  ">
           
                 <label className=" font-bold mb-[2rem] text-center" htmlFor="10">لطفاایمیل خود را وارد کنید</label>
                 <input onChange={(x)=>setEmail(x.target.value)} placeholder=" jack@example.com..." className=" w-[75%]  sm:w-[25%] mx-auto  font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1.5rem] outline-none" type="email" id="10" />
                 
                 <label className=" font-bold mb-[2rem] text-center" htmlFor="11">لطفا نام خود را وارد کنید</label>
                 <input onChange={(x)=>setName(x.target.value)} placeholder=" jack..." className="  w-[25%] mx-auto font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1.5rem] outline-none" type="text" id="11" />
                 
                 <label className=" font-bold mb-[2rem] text-center" htmlFor="12">لطفا پسورد خود را وارد کنید</label>
                 <input onChange={(x)=>setPassword(x.target.value)}  minLength={3} maxLength={8} placeholder="password..." className=" w-[25%] mx-auto font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[2.5rem] outline-none" type="password" id="12" />

                <button type="submit" className={` ${isfull ? " bg-blue-400 " : " bg-[#cccc] "} mt-[.8rem] mx-auto  transition ease-in delay-75 flex justify-center items-center rounded-[4px] w-[4.5rem] text-[#ffff] h-[2.3rem] `}>{titelBtn}</button>
                <Link to={"/user.nobat.ir/signup"} className=" mt-[3rem] mx-auto bg-[#cccc] flex hover:bg-blue-400  transition ease-in delay-75 items-center justify-center rounded-[4px] w-[7rem] text-[#ffff] h-[2.3rem] pb-[.3rem]"> ساخت حساب</Link>
        
        </form>
    </section>
  )
}
