
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
            {contentTitle?.map((res)=> <p className="mb-[.8rem]">{res}</p>)}
            {listItems && <ul className=" list-disc" >
                {listItems?.map((res)=> <li className=" mb-[]">{res}</li>)}
            </ul>}
            {contect.map((res)=> <p className=" mb-[.8rem]">{res}</p>)}
        </div>
    </div>
  )
}
