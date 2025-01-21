
interface Acordiontype{
    titel:string,
    contect:string
}
export default function Acordion({titel , contect}:Acordiontype) {
  return (
    <div >
      <h2></h2>
      <p>{contect}</p>
    </div>
  )
}
