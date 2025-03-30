import s from './SearchPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router";
import {useEffect} from "react";
import {fetchAll} from "../../features/goodsSlice.js";
import {Goods} from "../Goods/Goods";


export const SearchPage = () => {
    const {goodsList} = useSelector(state => state.goods);
    const dispatch = useDispatch();
    let [searchParams] = useSearchParams();

    useEffect(() => {
       const search = searchParams.get('q');
       const params = {search};

       dispatch(fetchAll(params));
    }, [searchParams, dispatch]);

    return (
        goodsList.length ?
            <Goods title='Избранное' />
            :
            <h3 className={s.empty}>Ничего не найдено</h3>
    );
};