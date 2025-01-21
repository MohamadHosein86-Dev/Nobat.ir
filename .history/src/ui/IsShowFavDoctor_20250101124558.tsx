import { useSelector } from "react-redux";
import useUser from "../hooks/useUser";
import React from "react";
import { useLocation } from "react-router-dom";


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
    const {pathname}=useLocation();

    if(authenticatd && favaritDoctors.length !== 0) return (
             <>{children}</>
    )
    if(!authenticatd && pathname === "/user.nobat.ir/favarite") return null;
}
