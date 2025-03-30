import s from './Search.module.scss';
import {Container} from "../Layout/Container/Container";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from 'yup';
import {useNavigate} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toggleSearch} from "../../features/searchSlice.js";


export const Search = () => {
    const {openSearch} = useSelector(state => state.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        search: '',
    };

    const validationSchema = Yup.object({
        search: Yup.string().required('Обязательно для заполнения'),
    });

    const handleSubmit = ({search}, {resetForm}) => {
        if (search.trim()) {
            navigate(`/search?q=${search}`);
            resetForm();
            dispatch(toggleSearch(false));
        }
    };

    return (
        openSearch && (
            <div className={s.search}>
            <Container>
               <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                   <Form className={s.form}>
                       <Field className={s.input} type="search" name='search' placeholder='Найти...' />
                       <ErrorMessage className={s.error} name='search' component={'p'} />
                       <button className={s.btn} type='submit'>Искать</button>
                   </Form>
               </Formik>
            </Container>
        </div>)
    );
};