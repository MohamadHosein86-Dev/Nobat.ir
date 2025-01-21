
interface Acordiontype{
    titel:string,
    contect:string[]
}
export default function Acordion({titel , contect}:Acordiontype) {
  return (
    <div className=" mb-[2rem] border-[]">
      <h2>{}</h2>
      {contect.map((res)=> <p>{res}</p>)}
    </div>
  )
}
