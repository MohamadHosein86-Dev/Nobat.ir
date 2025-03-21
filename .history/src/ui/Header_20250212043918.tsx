import { IoSearchSharp } from "react-icons/io5";
import BtnLogin from "./BtnLogin";
import { LogoHeader } from "./LogoHeader";
import {  useState } from "react";
import { FaTimes } from "react-icons/fa";
import BtnFilter from "./BtnFilter";
import Modal from "./Modal";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import MenuFilterCity from "./MenuFilterCity";
import { cities } from "../servises/filterCity";
import { specialties } from "../servises/filterspecialty";
import User from "./User";



export default function Header() {
  const navigate =useNavigate();
  
  const [showInput , setshowInput] = useState(false);
  const [showBtn , setshowBtn] = useState(false);
  const [search , setquery] = useState("");
  
  
  
  const {pathname } = useLocation();
  console.log(pathname+"d");
  const [searchParams  ]=useSearchParams();
  const {id}=useParams();
  const city = searchParams.get("city") || "";
  const specialty = searchParams.get("specialty")
  
  
  function handlesubmit(x:React.FormEvent<HTMLFormElement>) {
    x.preventDefault();
    navigate(`101/?search=${search}`, {replace:true}); 
    setquery("");
    
  }
 

  
  const isCityBtn = pathname === `/${id}`;

  return (
  <>
      <User />
      <section  className={`w-[100%]  ${pathname == "/" && `mb-[7rem]`} mb-[1rem] md:mb-[0]`}>
      
                <header className="  bg-header-500 ">
                  <div className="max-w-[68rem]  px-[1rem] mx-auto py-[1rem] flex-col   md:px-[4rem] md:py-[2rem]  ">
                    <div className=" flex justify-between items-center ">
                    <LogoHeader></LogoHeader>
                    <BtnLogin to="/user.nobat.ir/login" onclick={()=>{} }>ورود</BtnLogin>
                    </div>
                </div>
                </header>
                  
                <div className={` ${pathname === "/rules" && "hidden"} ${pathname === "/phone" && "hidden"} md:border-b-[2px]   ${pathname !== "/" ?  " md:bg-[#f2f2f2] border-none" : ""}`}>
                      <div className={` flex-col   max-w-[68rem] mx-auto px-[1rem]  h-[3rem] gap-[1rem]  justify-between  md:flex-row flex md:px-[4rem] md:pt-[.5rem] md:pb-[3rem]`}>
                    
                        {isCityBtn ? <div></div> :
                          <>
                          <Modal>           
                                  <Modal.Open openwindowName="windowFilter">
                                      <div className=" md:mt-[0] mt-[1rem]"><BtnFilter onclick={()=>{}}>{(city == "" ? "شهر" : city) }</BtnFilter></div>
                                  </Modal.Open>
                                  <Modal.Window center={false} name="windowFilter">
                                      <MenuFilterCity CloseModal={()=>{}}  data={cities} plasehoder="نام شهر خود را وارد" />
                                  </Modal.Window>
                          </Modal> 

                          <Modal>
                                <Modal.Open openwindowName="windowFilter1">
                                    <div className=" block md:hidden md:mt-[0] mt-[0rem]">
                                      <BtnFilter onclick={()=>{}}>{specialty === null ? "لیست تخصص ها" : specialty}</BtnFilter>
                                    </div>
                                </Modal.Open>
                                <Modal.Window center={false} name="windowFilter1">
                                    <MenuFilterCity CloseModal={()=>{}}  data={specialties} plasehoder="نام تخصص مورد نظر خود را وارد" />
                                </Modal.Window>
                          </Modal>
                          </>
                        }
                        
                        <div className={`flex ${ pathname === `/${id}` && "  " } pb-[1rem] gap-[1rem] md:mb[8rem]`}>
                              <form onSubmit={handlesubmit} className="flex gap-[.75rem]  w-[100%] ">
                              <input
                                      onChange={(x) => setquery(x.target.value)}
                                      placeholder="جست و جوی نام پزشک تخصص و ..."
                                      type="text"
                                      className={`${ 
                                        showInput ? "block" : "hidden"
                                      } border-[1px] cursor-pointer pr-[1.5rem] border-[black] font-semibold border-none bg-[#eeee] max-with:block w-full input h-[2.5rem] md:h-[1rem] mb-[2rem] md:w-[22rem]`}
                                      onClick={() => setshowBtn(true)}
                                      onBlur={(e) => {
                                        if (!e.currentTarget.contains(e.relatedTarget)) {
                                          
                                          setTimeout(() => {setshowInput(false); setshowBtn(false) } , 200);
                                        }
                                      }}
                                      value={search}
                                  />

                                  <button type={search !== "" ? "submit" : "button"} onClick={() => setshowInput((res) => !res)}  className={`${pathname !== "/" ? " text-left" :" text-right "}  ${  showBtn ? "" : " max-with:hidden"}  p-[1rem] cursor-pointer w-[2.5rem] h-[2.5rem] rounded-full bg-[#f2f2f2] flex justify-center items-center`}>
                                        <span className="text-gray-500 font-semibold">
                                            {!showInput ? <IoSearchSharp /> : (search !== "" ? <IoSearchSharp /> : <FaTimes />)} 
                                        </span>
                                  </button>

                              </form>
                        </div>
                      </div>
                </div>
    
      </section>
  </>
  )
}
