import { useRouteError } from "react-router-dom"

export default function ErrorElemnt() {
    const eror = useRouteError();
  return (
    <div>
      {err.message || }
    </div>
  )
}
