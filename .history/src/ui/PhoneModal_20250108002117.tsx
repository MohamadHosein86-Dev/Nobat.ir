
interface typeInput{
  phone:string
}
export default function PhoneModal({phone}:typeInput) {
  console.log(phone);
  
  return (
    <div className=' w-[26rem] h-[6rem] flex flex-col justify-center items-baseline '>
        <h2 className=" text-[#000000a6]">شماره مطب</h2>
        <div className=" border-b border-b-[black] justify-start  hover:text ">{phone}</div>
    </div>
  )
}
