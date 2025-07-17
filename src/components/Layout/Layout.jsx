import React, {useContext} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext"; // 👈 Importamos el contexto

const Layout=({ children })=>{
    const { theme } = useContext(ThemeContext);
    
return(
<>
<div className={theme}>
    <Header/>
    <main>
        {children}
    </main>
    <Footer/>
    </div>
</>
);
}

export default Layout;