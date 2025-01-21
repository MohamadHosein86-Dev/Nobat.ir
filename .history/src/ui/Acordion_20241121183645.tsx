
interface Acordiontype{
    titel:string,
    contect:string[],
    contentTitle?:string[]
}
export default function Acordion({titel , contect ,contecttitle}:Acordiontype) {
    console.log(contecttitle?.map((res)=> res));
    
  return (
    <div className=" mb-[2rem] border-[]">
      <h2 className=" font-bold">{titel}</h2>
        <div>
        {contecttitle?.map((res)=> res)}
        {contect.map((res)=> <p>{res}</p>)}
        </div>
    </div>
  )
}
