
interface typeInput{
  phone:string
}
export default function PhoneModal({phone}:typeInput) {
  console.log(phone);
  
  return (
    <div className=' w-[26rem]  h-[6rem]  '>
        
        <div className=" border-b mb-[3.5rem] border-b-[#000000a6] flex flex-col ">
            <h2 className=" text-[#000000a6]">شماره مطب</h2>
            <div className=" flex justify-between  mt-[3.2rem] pb-[.5rem] w-[100%]  hover:text ">
              <button className=" flex items-center bg-[#fff] border-none rounded-[50%]  justify-center w-[2.5rem] text-[#000] text-[1.5rem] h-[2.5rem]  custom_shadow8">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
