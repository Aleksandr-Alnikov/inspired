import {Top} from "./Top/Top";
import {Navigation} from "./Navigation/Navigation";
import {Search} from "../Search/Search";

export const Header = () => {

    return (
        <header>
            <Top />
            <Search />
            <Navigation />
        </header>
    );
};