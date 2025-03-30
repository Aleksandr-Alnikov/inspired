import {Goods} from "../Goods/Goods";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCategory} from "../../features/goodsSlice.js";
import {useSearchFromParams} from "../../hooks/useSearchFromParams.js";


export const FavoritePage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorite);
    const page = useSearchFromParams(dispatch);

    useEffect(() => {
        if (favorites) {
            const param = {list: favorites};
            if (page) {
                param.page = page;
            }
            dispatch(fetchCategory(param));
        }
        }, [favorites, page, dispatch]);

    return (
        favorites.length ?
        <Goods title='Избранное' /> :
            <h3>Пусто</h3>
    );
};