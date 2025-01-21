import {  useState } from "react"
import { useDoctor } from "../hooks/useDoctor";
import { getToday } from "../featchers/getPersianDay";
import { useDispatch, useSelector } from "react-redux";
import { addNobatDaayDoctors, } from "../featchers/AddTrunsDoctor";


interface typeInput{
  dayNobat:string;
  time_slots:Array<{from:string, to:string}>;
  isTodayAcsepting:string
}
export interface TypeNobatDoctor{
  from:string,
  to:string,
  name : string ,
  specialty : string ,
  image : string ,
  nobatDay:string
}
interface TypeNobatDoctors{
  nobatDoctors:{
    NobatDoctors:TypeNobatDoctor[],
  }
}


export default function MoalGetNobat({isDayNobat , time_slots , isTodayAcsepting }:typeInput) {


    const dispatch =useDispatch();  
    
    
    const {doctor}=useDoctor();
    const specialty = doctor?.specialty as string ;
    const image = doctor?.image as string ;
    const name =doctor?.name as string;
    const id = doctor?.id as string ;
    // doctor

    const {NobatDoctors } =useSelector((res:TypeNobatDoctors)=>res.nobatDoctors);
    
    
    const [selected , setSelected] = useState<number | null>(null);
    const [showBtn , setShowBtn] = useState<number | null>(null);
    const [from , setFrom] = useState("");
    const [to , setTo] =useState("");
    // Nobat & doctor
    
    
    
    
    
    const today = getToday();
    const isToday= today.Today === isTodayAcsepting;
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const nobatDay =  ;
    // Date


    const titel = isToday ? "امروز" : "روز"; 
    // Titel


    function checkIspast(from:string) {
      const [fromHour , fromMinute] = from.split(":").map(Number);
      const slotTime = fromHour * 60 +fromMinute ;

      return currentTime > slotTime ;
    }
    function handleAccpet() {
        dispatch(addNobatDaayDoctors({from  ,to ,nobatDay ,name , image , specialty ,id }));
        setShowBtn(selected);
    }
    function handleHuorsNobat(From:string , To:string  ,index:number) {
      setFrom(From);
      setTo(To);
      setSelected(index);
      
    }
  
  return (
    <div className=" w-[26rem] top-0 h-lvh mb-[9.5rem] rounded-sm flex flex-col relative bg-[#fff]">
      <span className=" transition ease-in delay-100 custom_shadow10 text-center border-b-[1px] border-[#d9d9d9 ] pb-[.3rem] cursor-pointer"> نوبت های {titel} {isTodayAcsepting} </span>
        
      <div className="z-0 mt-[1rem] flex gap-[1rem]">
            {time_slots?.map((res , index)=>{
              const ispast = checkIspast(res.from);
              const isDesable = isToday && ispast ;
              const isSelected = index === selected  ;           
              const isNobat = NobatDoctors.flatMap((resp)=>resp.to).includes(res.to) && NobatDoctors.flatMap((res)=>res.name).includes(name);
              console.log(NobatDoctors.flatMap((res)=>res.nobatDay) + "sdkcjnc");
              
              return(
                    <div key={index}   className={` cursor-pointer ${ isDesable || isNobat ? "bg-[#ababab] text-[#343a40] " : ""} justify-center rounded-[.3rem] border-[#f5f5f5] border-[1px] p-[.5rem] flex items-center gap-[.8rem] w-[10rem]`}>
                        <label  htmlFor=""> از  {res.from} تا {res.to} </label>
                        <input checked={isSelected}  className={`${isDesable ||  isNobat  ? "hidden" : ""}  chelckBox`}   onChange={()=>handleHuorsNobat(res.from ,res.to ,index )} type="checkbox" />
                    </div>
             )
            }
            )}
      </div>
      {showBtn === selected ? <></> :  <button  onClick={handleAccpet} className=" mt-[2rem] text-[#ffff] text-sm font-bold rounded-[1rem] text-center bg-[#66de66] p-[1rem]" >ثبت نوبت از ساعت  تا {from} {to} {doctor?.name}  </button>  }   
          
    </div>

  )
}
