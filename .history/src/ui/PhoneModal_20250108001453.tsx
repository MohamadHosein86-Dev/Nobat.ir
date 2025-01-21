
interface typeInput{
  phone:string
}
export default function PhoneModal({phone}:typeInput) {
  console.log(phone);
  
  return (
    <div className=' w-[26rem] h-[3rem] flex flex-col items-center  px-[2rem]'>
        <h2 className=" text-[#000000a6]">شماره مطب</h2>
        <div className=" p-[1rem] hover:text">{phone}</div>
    </div>
  )
}
