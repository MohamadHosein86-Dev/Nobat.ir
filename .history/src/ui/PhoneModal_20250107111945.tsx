
interface typeInput{
  phone:string
}
export default function PhoneModal({phone}:typeInput) {
  return (
    <div className=' w-[26rem] h-[3rem] '>
        <h2 className=" text-[#000000a6]">شماره مطب</h2>
    </div>
  )
}
