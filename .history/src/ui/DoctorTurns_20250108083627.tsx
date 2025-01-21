import { useSelector } from "react-redux";
import useUser from "../hooks/useUser";
import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneModal from "./PhoneModal";

interface TyppeDoctor {
  name: string;
  specialty: string;
  from: string;
  to: string;
  image: string;
  nobatDay: string;
}

interface TypeNobatDoctors {
  nobatDoctors: {
    NobatDoctors: TyppeDoctor[];
  };
}

export default function DoctorTurns() {
  const { NobatDoctors } = useSelector((res: TypeNobatDoctors) => res.nobatDoctors);
  const { user } = useUser();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section>
      <div className="max-w-[54rem] flex flex-col gap-[2rem] px-[1.5rem] mx-auto py-[1rem] md:px-[4rem] md:pt-[1.5rem] md:pb-[1.5rem">
        <div className=" w-[100%] flex justify-center items-center gap-[1rem]">
          <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
          <div className=" w-[29%] text-[#cdcdcd]">نوبت های من</div>
          <span className=" w-[100%] bg-[#cdcdcd] h-[1px]"></span>
        </div>
      </div>
      <div className=" max-w-[54rem] px-[1.5rem] mx-auto flex items-center justify-between md:px-[4rem] pt-[.7rem] ">
        <div className=" flex flex-col w-[100%] ">
          {NobatDoctors.map((resp, index) => (
            <div key={index}>
              {activeIndex === index ? 
              (
                <div onClick={() => handleClick(index)}>
                      <div className=" py-[3rem] relative flex justify-center items-center rounded-[1.3rem] border-[#ffff] border-[4px] custom_shadow6 mt-[-1rem] w-[100%] bg-[#f9f9f9] h-[26rem]">
                          <div className=" flex flex-col w-[100%] ">
                            <div className=" flex flex-col items-center">
                                  <div className=" relative">
                                    <Link to={`/dddId`}>
                                        <img className=" rounded-[50%] w-[8rem] h-[8rem] object-cover" src={resp.image} alt="" />
                                    </Link>
                                    <button className=" flex items-center bg-[#fff] border-none rounded-[50%] bottom-[0] justify-center w-[2.5rem] text-[#000] text-[1.5rem] h-[2.5rem] absolute custom_shadow8">
                                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"></path></svg>
                                    </button>
                                  </div>
                                  <Link to={`//dddId`}>
                                        <h3 className=" mt-[.6rem] hover:text-[#007bff] transition font-semibold ">دکتر{resp.name}</h3>
                                  </Link>
                                  <Link to={`//dddId`}>
                                        <h3 className=" hover:text-[#007bff] transition text-[#005761] text-sm font-bold ">متخصص {resp.specialty}</h3>
                                  </Link>
                            </div>
                            <div className=" flex flex-col gap-[2px] w-[100%] px-[4rem] mt-[2rem]">
                               <div className=" bg-[#ffff] w-[100%] px-[.5rem] py-[.7rem] flex items-center justify-between">
                                  <p className=" text-sm font-bold text-[#000000a6]"> نام بیمار</p>
                                  <p className=" text-sm font-bold text-[#000000a6]">{user?.name}</p>
                               </div>
                               <div className=" bg-[#ffff] w-[100%] px-[.5rem] py-[.7rem] flex items-center justify-between">
                                  <p className=" text-sm font-bold text-[#000000a6]"> زمان ویزیت</p>
                                  <p className=" text-sm font-bold text-[#000000a6]">
                                    <span> {resp.nobatDay} ,</span>
                                    <span> از {resp.from} تا {resp.to}  </span>
                                  </p>
                               </div>
                            </div>
                            <div></div>  
                          </div>
                      </div>
                </div>
              )
               : 
              (
                <div
                onClick={() => handleClick(index)}
                className="flex gap-[2rem] cursor-pointer pb-[1.2rem] border-b-[1px] w-[100%]"
              >
                <div className="flex justify-between items-center w-[100%] mt-[1.2rem]">
                  <div className="flex gap-[.5rem]">
                    <img className="max-w-[3.5rem] h-[3.5rem] object-cover" src={resp.image} alt="" />
                    <div>
                      <h2 className="text-sm font-medium mb-[.4rem] text-[#3c4e00]">{resp.name}</h2>
                      <p className="text-sm font-medium text-[#3c4e00]">متخصص {resp.specialty}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>
                      از {resp.from} تا {resp.to}
                    </span>
                    <span>{resp.nobatDay}</span>
                  </div>
                </div>
               </div>
              )
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}