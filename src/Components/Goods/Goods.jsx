import s from "./Goods.module.scss";
import {Container} from "../Layout/Container/Container.jsx";
import {Product} from "../Product/Product.jsx";
import {useSelector} from "react-redux";
import {Pagination} from "../Pagination/Pagination.jsx";


export const Goods = ({title}) => {
    const {goodsList, totalCount, status} = useSelector(state => state.goods);

    return (
        <section>
            <Container>
                <h2 className={s.title}>
                    {title ?? 'Новинки'}
                    {totalCount && totalCount > 0 ? <sup>&nbsp;({totalCount})</sup> : ''}
                </h2>
                <ul className={s.list}>
                    {goodsList.map(item => <Product key={item.id} {...item} />)}
                </ul>
                <Pagination />
            </Container>
        </section>
    );
};