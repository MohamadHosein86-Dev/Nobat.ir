import { useRouteError } from "react-router-dom"

export default function ErrorElemnt() {
    const eror = useRouteError() as ;
  return (
    <div>
      {err.message || }
    </div>
  )
}
