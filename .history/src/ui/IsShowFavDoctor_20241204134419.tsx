import { useSelector } from "react-redux";
import useUser from "../hooks/useUser";
import React from "react";


interface HasFavaritType{
    favaritDoctor:{
        favaritDoctors:object[]
    } 
}
interface ChildrenTypes{
    children:React.ReactNode
}
export default function IsShowFavDoctor({children}:ChildrenTypes) {
    const {authenticatd}=useUser(); 
    const {favaritDoctors} = useSelector((state:HasFavaritType)=> state.favaritDoctor);

    if(authenticatd && favaritDoctors.length !== 0) return (
             <>{children}</>
    )
}
