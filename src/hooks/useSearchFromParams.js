import {useLocation} from "react-router";
import {setPage} from "../features/goodsSlice.js";
import {useEffect} from "react";

export const useSearchFromParams = (dispatch) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pageURL = searchParams.get('page');

    useEffect(() => {
        dispatch(setPage(+pageURL));
    }, [pageURL, dispatch]);

    return pageURL;
};