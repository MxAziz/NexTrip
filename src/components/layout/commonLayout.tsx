// children a error dile use korbo IProps

import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps{
    children: ReactNode
}

export function CommonLayout({children}:IProps){
    return <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div className="flex-grow container mx-auto px-4">
        {children}
        </div>
        <Footer></Footer>
    </div>;
}
