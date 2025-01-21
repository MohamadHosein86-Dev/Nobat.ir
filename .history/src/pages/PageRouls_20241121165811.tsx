import { roules } from "../servises/getRouls";
import Acordion from "../ui/Acordion";

export default function PageRouls() {
    
  return (
    <section className=" max-w-[68rem]  px-[1.5rem] mx-auto py-[1rem] flex-col   md:px-[4rem] md:py-[2rem] ">
      <div className=" mt-[6rem] mb-[6rem]">
      <div className=" flex   mt-[-3rem] justify-between items-center w-[100%]">
       <div className=" pb-[1rem]" >
            <h1 className=" mb-[2.7rem] text-[1.4rem] font-semibold">شرایط و قوانین استفاده از خدمات نرم افزار های تسهیل گر خدمات نوبت دهی سایت پزشکی نوبت دات آی آر </h1>
            <p className=" text-[1rem] text-[#878787] mb-[1rem]"> 
            کاربر گرامی لطفا مواردی که در این صفحه ‌ذکر شده است را به منظور 
            استفاده بهینه از خدمات نوبت دات آی آر به دقت مطالعه نمایید.
            </p>
            <p className="text-[1rem] text-[#878787] ">
                ورود کاربران به نوبت دات آی آر و استفاده از هر یک از خدمات این 
                وبسایت به معنای آگاه بودن و پذیرفتن شرایط و قوانین ذکر شده در 
                این صفحه می باشد. 
            </p>
       </div>
          <img className=" w-[25rem] ml-[1rem]" src="https://nobat.ir/public/ui_v2_0/images/uiv2/nobatLogo-alt.png" alt="" />
      </div>
      </div>
      <div>
        {roules.map((res)=> <Acordion contect={res.content} />)}
      </div>
    </section>
  )
}
