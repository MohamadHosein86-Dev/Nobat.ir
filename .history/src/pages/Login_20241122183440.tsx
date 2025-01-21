
export default function Login() {
  return (
    <section className=" flex justify-center items-center w-[100%] h-[100%]">
        <form className=" flex flex-col w-[20rem] h-[100%] justify-center mt-[4rem]  ">
           
                 <label className=" text-center" htmlFor="">لطفا ایمیل و پسورود خود را وارد کنید</label>
                 <input type="email" name="" id="" />
                 <input minLength={3} maxLength={8} type="password" name="" id="" />
           
            <button>ورود</button>
        </form>
    </section>
  )
}
