// children a error dile use korbo IProps

import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps{
    children: ReactNode
}

export function CommonLayout({children}:IProps){
    return <div className="common-layout">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    </div>;
}
