import s from '../Product/Product.module.scss';
import {API_URL} from "../../const.js";
import {NavLink} from "react-router";
import {ColorList} from "../ColorList/ColorList.jsx";
import {BtnLike} from "../BtnLike/BtnLike";



export const Product = ({id, pic, title, price, colors}) => {

    return (
        <li>
            <article className={s.product}>
                <NavLink className={s.link} to={`/product/${id}`}>
                    <img className={s.image} src={`${API_URL}/${pic}`} alt={title} />
                    <h3 className={s.title}>{title}</h3>
                </NavLink>
                <div className={s.row}>
                    <p className={s.price}>руб. {price}</p>
                        <BtnLike id={id}/>
                </div>
                <ColorList colors={colors} />
            </article>
        </li>
    );
};