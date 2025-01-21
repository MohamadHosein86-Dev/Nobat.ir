import { useSearchParams } from "react-router-dom";


export default function useUpdatePrams(key:string , value:string) {  
    const [searchparams ,setSerchparams]= useSearchParams();
    
    
}