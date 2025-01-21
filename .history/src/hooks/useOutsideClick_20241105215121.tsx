import { useEffect, useRef } from "react";



export default function useOutsidClick(close:Function) {
    const modalRef = useRef<HTMLDivElement>();

    useEffect(function() {
        function handleclick(x:MouseEvent) {
          if(modalRef.current && !modalRef.current.contains(x.target as Node)){
            close();
          }
        };

        document.addEventListener("click",handleclick,true);
        return ()=> document.removeEventListener("click" , handleclick , true);
    } , [close]);


      return {modalRef};
}
