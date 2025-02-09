
interface typeInput{
  phone:string;
  CloseModal?:()=>void
}
export default function PhoneModal({phone , CloseModal= ()=>{} }:typeInput ) {
  
  
  return (
    <div className=' w-[26rem]   h-[7rem]  '>
        <div className=" border-b pb-[.5rem]   border-b-[#000000a6] flex flex-col ">
            <div className=" flex justify-between w-[100%]">
              <h2 className=" text-[#000000a6]">شماره مطب</h2>
              <div onClick={()=>CloseModal()} className=" flex justify-center cursor-pointer items-center  bg-[#efefef] w-[2rem] h-[2rem] rounded-[50%] ">
                  <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg>
              </div>
            </div>
            <div className=" hover:text-[#40a9ff] transition-all ease-in delay-75 cursor-pointer  flex items-center mt-[1.7rem] justify-between   pb-[.5rem] w-[100%]  hover:text ">
              <button className=" flex items-center bg-[#efefef] border-none rounded-[50%]  justify-center w-[1.7rem] text-[#000] text-[1.4rem] h-[1.7rem]  custom_shadow8">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height=".8em" width=".8em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z">
                  </path>
                </svg>
              </button>
              <span>{phone}</span>
            </div>
        </div>
    </div>
  )
}
