import s from './CartItem.module.scss';
import cn from 'classnames';
import {API_URL} from "../../const.js";
import {Count} from "../Count/Count";
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../../features/cartSlice.js";


export const CartItem = ({goodsList, id, size, count}) => {
    const dispatch = useDispatch();
    const item = goodsList.find(item => item.id === id);

    const handleCountChange = (count) => {
        dispatch(addToCart({id, size, count}));
    };
    const handleRemoveItem = () => {
        dispatch(removeFromCart({id, size}));
    };


    return (
        <article className={s.item}>
            <img className={s.image} src={`${API_URL}/${item?.pic}`} alt="картинка"/>
            <div className={s.content}>
                <h3 className={s.title}>{item?.title}</h3>
                <p className={s.price}>руб. {item?.price}</p>
                <div className={s.vendorCode}>
                    <span className={s.subtitle}>Артикул:</span>
                    <span>{id}</span>
                </div>
            </div>
            <div className={s.prop}>
                <div className={s.size}>
                    <p className={cn(s.subtitle, s.sizeTitle)}>Размер:</p>
                    <div className={s.sizeItem}>{size}</div>
                </div>
            </div>
            <button className={s.del} onClick={handleRemoveItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8L8 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 16L8 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <Count className={s.count}
                   count={count}
                   handleDecrement={() => {
                       handleCountChange(count - 1);
                   }}
                   handleIncrement={() => {
                       handleCountChange(count + 1);
                   }}
            />
        </article>
    );
};