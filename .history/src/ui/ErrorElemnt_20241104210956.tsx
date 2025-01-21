import { useRouteError } from "react-router-dom"

interface errortype{
    massage:string ,
     data:string
}
export default function ErrorElemnt() {
    const error = useRouteError() as errortype ;
  return (
    <div>
      {error.massage || error.data}
    </div>
  )
}
