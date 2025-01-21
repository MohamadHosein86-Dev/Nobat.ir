
interface Acordiontype{
    titel:string,
    contect:string[],
    contentTitle?:string[],
    listItems:string[]
}
export default function Acordion({titel , contect ,contentTitle , listItems}:Acordiontype) {
    console.log(contentTitle?.map((res)=> res));
    
  return (
    <div className=" mb-[3rem] border-[]">
      <h2 className=" font-bold">{titel}</h2>
        <div className=" flex flex-col gap-[1rem]">
            {contentTitle?.map((res)=> res)}
            {listItems && <ul>
                {listItems?.map((res)=> <li>{res}</li>)}
            </ul>}
            {contect.map((res)=> <p>{res}</p>)}
        </div>
    </div>
  )
}
