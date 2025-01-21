import { useEffect, useRef } from "react";


interface typeclose{
  close:()=>void
}
export default function useOutsidClick({close}:typeclose) {
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
