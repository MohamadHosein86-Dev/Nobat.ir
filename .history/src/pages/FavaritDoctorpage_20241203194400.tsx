import { useSelector } from "react-redux";


export default function FavaritDoctor() {

  const {favaritDoctors} = useSelector((state:HasFavaritType)=> state.favaritDoctor);

  return (
      <div className="max-w-[54rem] flex gap-[2rem] px-[1.5rem] mx-auto py-[1rem]  md:px-[4rem] md:py-[2rem]">
            <div className="">لیست مورد علاقه</div>
      </div>
  )
}
