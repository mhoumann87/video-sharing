import {ReactNode} from "react";
import NavBar from "@/components/NavBar";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}

export default Layout;