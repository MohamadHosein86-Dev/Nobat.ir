
interface typeInput{
  phone:string
}
export default function PhoneModal({phone}:typeInput) {
  console.log(phone);
  
  return (
    <div className=' w-[26rem]  h-[6rem]  '>
        
        <div className=" border-b mb-[3.5rem] border-b-[#000000a6] flex justify-between ">
            <h2 className=" text-[#000000a6]">شماره مطب</h2>
            <div className=" mt-[4rem]  justify-start hover:text ">{phone}</div>
        </div>
    </div>
  )
}
