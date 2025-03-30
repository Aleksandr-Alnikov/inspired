import s from './OrderModal.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../const.js";
import {clearCart} from "../../features/cartSlice.js";


export const OrderModal = () => {
    const {order: {values, order, id, totalPrice}} = useSelector(state => state.cart);
    const {goodsList} = useSelector(state => state.goods);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
      dispatch(clearCart());
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={s.modal} onClick={handleCloseModal}>
            <div className={s.body} onClick={handleModalClick}>
                <h2 className={s.title}>Заказ оформлен: #{id}</h2>
                <div className={s.description}>
                    <p>Спасибо за выбор нашего магазина!</p>
                    <p>Детали заказа:</p>
                </div>
                <ul className={s.customer}>
                    <li className={s.customerItem}>
                        <span className={s.customerTitle}>Получатель</span>
                        <span className={s.customerData}>{values.fio}</span>
                    </li>
                    {
                        order.delivery === 'delivery' &&
                        <li className={s.customerItem}>
                            <span className={s.customerTitle}>Адрес доставки</span>
                            <span className={s.customerData}>{values.address}</span>
                        </li>
                    }
                    <li className={s.customerItem}>
                        <span className={s.customerTitle}>Телефон</span>
                        <span className={s.customerData}>{values.phone}</span>
                    </li>
                    <li className={s.customerItem}>
                        <span className={s.customerTitle}>E-mail</span>
                        <span className={s.customerData}>{values.email}</span>
                    </li>
                    <li className={s.customerItem}>
                        <span className={s.customerTitle}>Способ получения</span>
                        <span className={s.customerData}>{values.delivery}</span>
                    </li>
                </ul>
                <ul className={s.goods}>
                    {order.map(item => {
                        const products = goodsList.find(product => product.id === item.id);
                        return (
                            <li className={s.goodsItem} key={`${item.id}${item.size}`}>
                                <img className={s.goodsImg} src={`${API_URL}/${products.pic}`} alt={products.title} />
                                <p className={s.goodsCount}>X{item.count}</p>
                            </li>
                        )})
                    }
                </ul>
                <div className={s.total}>
                    <p>Итого:</p>
                    <p>Руб. {totalPrice}</p>
                </div>
                <button className={s.close} onClick={handleCloseModal}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8L8 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 16L8 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};