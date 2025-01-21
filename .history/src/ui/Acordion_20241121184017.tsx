
interface Acordiontype{
    titel:string,
    contect:string[],
    contentTitle?:string[],
    listItems:string[]
}
export default function Acordion({titel , contect ,contentTitle , listItems}:Acordiontype) {
    console.log(contentTitle?.map((res)=> res));
    
  return (
    <div className=" mb-[2rem] border-[]">
      <h2 className=" font-bold">{titel}</h2>
        <div>
            {contentTitle?.map((res)=> res)}
            <ul>
                {listItems?.map((res)=> <li>{res}</li>)}
            </ul>
            {contect.map((res)=> <p>{res}</p>)}
        </div>
    </div>
  )
}
