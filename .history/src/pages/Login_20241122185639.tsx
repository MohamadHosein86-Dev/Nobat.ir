
export default function Login() {
    
    function handleLogin(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        
    }
  return (
    <section className=" flex justify-center  w-[100%] h-[100%]">
        <form onSubmit={handleLogin} className=" flex flex-col w-[20rem] h-[100vh] justify-center  ">
           
                 <label className=" font-bold mb-[2rem] text-center" htmlFor="10">لطفا ایمیل و پسورود خود را وارد کنید</label>
                 <input placeholder=" jack@example.com..." className=" font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1rem] outline-none" type="email" id="10" />
                 <input  minLength={3} maxLength={8} placeholder="password..." className=" font-bold text-[black] border-[1px] border-[#dddd] pr-[.8rem] pb-[.5rem] h-[3rem] mb-[1rem] outline-none" type="password" id="10" />

            <button className=" mt-[.8rem] mx-auto bg-[#cccc] rounded-[4px] w-[4.5rem] text-[#ffff] h-[2.3rem] pb-[.4rem]">ورود</button>
        </form>
    </section>
  )
}
