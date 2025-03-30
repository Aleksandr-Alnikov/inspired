import {Header} from "../Components/Header/Header";
import {Outlet} from "react-router";
import {Main} from "../Components/Layout/Main/Main.jsx";
import {Footer} from "../Components/Footer/Footer.jsx";



export const Root = () => {

    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};