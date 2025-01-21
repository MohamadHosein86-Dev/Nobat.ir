
export default function Login() {
  return (
    <section className=" flex justify-center  w-[100%] h-[100%]">
        <form className=" flex flex-col w-[20rem] h-[100vh] justify-center  ">
           
                 <label className=" text-center" htmlFor="">لطفا ایمیل و پسورود خود را وارد کنید</label>
                 <input className=" bg-[]" type="email" name="" id="" />
                 <input minLength={3} maxLength={8} type="password" name="" id="" />
           
            <button className=" bg-[#ddd] w-[5rem] h-[3rem] pb-[.4rem]">ورود</button>
        </form>
    </section>
  )
}
