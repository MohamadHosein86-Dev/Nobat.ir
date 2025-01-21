import { useRouteError } from "react-router-dom"

export default function ErrorElemnt() {
    const error = useRouteError() as ;
  return (
    <div>
      {error.massage || error.data}
    </div>
  )
}
