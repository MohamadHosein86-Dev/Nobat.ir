import { Link } from "react-router-dom";

export function LogoHeader() {
    
    return (
        <Link to="/">
                <img className=" block w-[135px]" src="https://nobat.ir/public/ui_v2_0/images/uiv2/nobatLogo.png" alt="Logo" />
        </Link>
    );
  }