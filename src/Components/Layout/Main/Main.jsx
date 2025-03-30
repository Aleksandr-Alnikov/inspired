import s from './Main.module.scss';
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";


export const Main = ({children}) => {
    const {status} = useSelector(state => state.statusServer);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!status && location.pathname !== '/404') {
            navigate('/404');
        }
    }, [navigate, status, location]);

    return (
        <div className={s.main}>{children}</div>
    );
};