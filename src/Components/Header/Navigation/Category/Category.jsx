import s from './Category.module.scss';
import {NavLink} from "react-router";
import cn from "classnames";
import {useSelector} from "react-redux";


export const Category = () => {
    const {activeGender, categories} = useSelector(state => state.navigation);



    return (
        <ul className={s.category}>
            {categories[activeGender]?.list?.map(item => (
                <li key={item.slug}>
                    <NavLink to={`/catalog/${activeGender}/${item.slug}`} className={({isActive}) => cn(s.link, isActive && s.linkActive)}>
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};