import useUser from "../hooks/useUser";
import React from "react";


interface ChildrenTypes{
    children:React.ReactNode
}
export default function IsShowFavDoctor({children}:ChildrenTypes) {
    const {authenticatd}=useUser();   
    
    if(authenticatd) return (
             <>{children}</>
    )
    
}
