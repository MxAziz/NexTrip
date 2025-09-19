// children a error dile use korbo IProps

import type { ReactNode } from "react";

interface IProps{
    children: ReactNode
}

export function CommonLayout({children}:IProps){
    return <div className="common-layout">{children}</div>;
}
