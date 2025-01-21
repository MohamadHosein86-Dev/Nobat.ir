
interface Acordiontype{
    titel:string,
    contect:string[],
    contentTitle?:string[]
}
export default function Acordion({titel , contect ,contentTitle}:Acordiontype) {
    console.log(contentTitle?.map((res)=> res));
    
  return (
    <div className=" mb-[2rem] border-[]">
      <h2 className=" font-bold">{titel}</h2>
        <div>
            {contentTitle?.map((res)=> res)}
            {}
            {contect.map((res)=> <p>{res}</p>)}
        </div>
    </div>
  )
}
