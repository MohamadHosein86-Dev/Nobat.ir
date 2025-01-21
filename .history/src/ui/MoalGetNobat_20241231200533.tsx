import { useState } from "react"
import { useDoctor } from "../hooks/useDoctor";
import { getToday } from "../featchers/getPersianDay";



interface typeInput{
    isTodayAcsepting:string;
    time_slots:Array<{from:string, to:string}>;
}

export default function MoalGetNobat({isTodayAcsepting , time_slots }:typeInput) {
  
    const {doctor}=useDoctor();
    
    const today = getToday();
    const isToday= today.Today === isTodayAcsepting;
    
    const [selectIndex , setSelectIndex] = useState<number | null>(null);
    const [showBtn , setShowBtn] = useState(false);

    const titel = isToday ? "امروز" : "روز"; 
  
    
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    function checkIspast(from:string) {
      const [fromHour , fromMinute] = from.split(":").map(Number);
      const slotTime = fromHour * 60 +fromMinute ;

      return currentTime > slotTime ;
    }


  return (
    <div className=" w-[26rem] top-0 h-lvh mb-[9.5rem] rounded-sm flex flex-col relative bg-[#fff]">
      <span className=" transition ease-in delay-100 custom_shadow10 text-center border-b-[1px] border-[#d9d9d9 ] pb-[.3rem] cursor-pointer"> نوبت های {titel} {isTodayAcsepting} </span>
        
      <div className="z-0 mt-[1rem] flex gap-[1rem]">
          {time_slots?.map((res , index)=>{
            const ispast = checkIspast(res.from);
            const isDesable = isToday && ispast ;
            const isSelect = selectIndex === index;
            
            return(
              <div key={index} className={` cursor-pointer ${isDesable ? "bg-[#ababab] text-[#343a40] " : ""} justify-center rounded-[.3rem] border-[#f5f5f5] border-[1px] p-[.5rem] flex items-center gap-[.8rem] w-[10rem]`}>
                <label  htmlFor=""> از  {res.from} تا {res.to} </label>
                <input checked={isSelect}  className={`${isDesable && "hidden"}  chelckBox`}   onChange={(x)=>{setSelectIndex(index) ; setShowBtn(x.target.checked) }} type="checkbox" />
              </div>
            )
          }
          
        )}
      </div>
        { && <button className=" mt-[2rem] text-[#ffff] rounded-[1rem] text-center bg-[#66de66] p-[1rem]">ثبت نوبت  {doctor?.name} </button>}   
          
    </div>

  )
}
