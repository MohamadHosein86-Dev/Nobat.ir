
interface Acordiontype{
    titel:string,
    contect:string[],
    contentTitle?:string[]
}
export default function Acordion({titel , contect ,contecttitle}:Acordiontype) {
  return (
    <div className=" mb-[2rem] border-[]">
      <h2 className=" font-bold">{titel}</h2>
      {contecttitle.map((res)=> <p>{res}</p>)}
      {contect.map((res)=> <p>{res}</p>)}
    </div>
  )
}
