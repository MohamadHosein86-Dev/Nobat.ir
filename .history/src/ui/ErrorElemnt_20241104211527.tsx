import { useRouteError } from "react-router-dom"

interface errortype{
    massage:string ,
     data:string
}
export default function ErrorElemnt() {
    const error = useRouteError() as errortype ;
  return (
    <h1 className=" text-center">
      {error.massage || error.data}
    </h1>
  )
}
