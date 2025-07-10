import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout=({ children })=>{
return(
<>
<Header/>
 <main>
    {children}
</main>
<Footer/>
</>
);
}

export default Layout;