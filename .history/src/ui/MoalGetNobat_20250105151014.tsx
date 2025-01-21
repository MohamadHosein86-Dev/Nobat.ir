import {  useState } from "react"
import { useDoctor } from "../hooks/useDoctor";
import { getToday } from "../featchers/getPersianDay";
import { useDispatch, useSelector } from "react-redux";
import { addNobatDaayDoctors, addToDoctorNobat } from "../featchers/AddTrunsDoctor";


interface typeInput{
    isTodayAcsepting:string;
    time_slots:Array<{from:string, to:string}>;
}
interface TypeNobatDoctors{
  nobatDoctors:{
    doctorsNobat:object[],
    nobatDay:string[],
  }
}


export default function MoalGetNobat({isTodayAcsepting , time_slots }:typeInput) {


    const dispatch =useDispatch();  
    const {doctorsNobat} =useSelector((res:TypeNobatDoctors)=>res.nobatDoctors)
    
    
    const {doctor}=useDoctor();
    
    console.log( doctorsNobat.map((res)=>res) + " فرار نکن کوصمادر");
    const today = getToday();
    const isToday= today.Today === isTodayAcsepting;
    
    const [selectIndex , setSelectIndex] = useState<number | null>(null);
    const [showBtn , setShowBtn] = useState(false);
    const [from , setFrom] = useState("");
    const [to , setTo] =useState("");

    const titel = isToday ? "امروز" : "روز"; 
    
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    function checkIspast(from:string) {
      const [fromHour , fromMinute] = from.split(":").map(Number);
      const slotTime = fromHour * 60 +fromMinute ;

      return currentTime > slotTime ;

    }
    function handleAccpet() {
      dispatch(addNobatDaayDoctors({from , to}));
      dispatch(addToDoctorNobat(doctor));

    }
    function handleHuorsNobat(From , To ,index) {
      setFrom(From);
      setTo(To);
      setSelectIndex(index);
      setShowBtn(true);
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
                  <div  className={` cursor-pointer ${isDesable  ? "bg-[#ababab] text-[#343a40] " : ""} justify-center rounded-[.3rem] border-[#f5f5f5] border-[1px] p-[.5rem] flex items-center gap-[.8rem] w-[10rem]`}>
                    <label  htmlFor=""> از  {res.from} تا {res.to} </label>
                    <input checked={isSelect}  className={`${isDesable || doctorsNobat.includes(doctor) ? "hidden" : ""}  chelckBox`}   onChange={()=>handleHuorsNobat(res.from ,res.to ,index)} type="checkbox" />
                    
                  </div>

                  
              )
            }
            )}
      </div>
      {showBtn  && !doctorsNobat.includes(doctor) ? <button onClick={handleAccpet} className=" mt-[2rem] text-[#ffff] text-sm font-bold rounded-[1rem] text-center bg-[#66de66] p-[1rem]" >ثبت نوبت از ساعت  تا {from} {to} {doctor?.name}  </button> : <></> }   
          
    </div>

  )
}
