
interface typeInput{
  phone:string
}
export default function PhoneModal({phone}:typeInput) {
  console.log(phone);
  
  return (
    <div className=' w-[26rem] h-[6rem] flex flex-col justify-center '>
        <h2 className=" text-[#000000a6]">شماره مطب</h2>
        <div className=" justify-start  hover:text">{phone}</div>
    </div>
  )
}
