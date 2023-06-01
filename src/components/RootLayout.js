import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import classes from './RootLayout.module.css'

function RootLayout() {
    return <>
        <NavBar />
        <main className={classes.main}>
            <SideNav />
            <Outlet />
        </main>
    </>
}

export default RootLayout;