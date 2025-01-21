import { useRouteError } from "react-router-dom"

interface errortype{
    massage:string ,
     data:string
}
export default function ErrorElemnt() {
    const error = useRouteError() as errortype ;
  return (
   <div className=" w-[100%] h-[100%] flex items-center justify-center">
         <h1 className=" text-center text-red-500 font-semibold">
      {error.massage || error.data}
    </h1>
   </div>
  )
}
