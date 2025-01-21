import { roules } from "../servises/getRouls";

export default function PageRouls() {

    console.log(roules);
    
  return (
    <section>
      <div className="max-w-[68rem] pt-[4rem]   mx-auto mt-[2rem] px-[1.5rem] md:px-[4rem] flex justify-center">
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
    </section>
  )
}
