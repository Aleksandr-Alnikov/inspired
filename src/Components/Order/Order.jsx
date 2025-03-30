import s from './Order.module.scss';
import {Container} from "../Layout/Container/Container";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {PatternFormat} from "react-number-format";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {sendOrder} from "../../features/cartSlice.js";


export const Order = ({cartItems}) => {
    const dispatch = useDispatch();

    const handleSubmitOrder = (values) => {
        dispatch(sendOrder({order: cartItems, values}));
    };

    const validationSchema = Yup.object({
            fio: Yup.string().required('Обязательно к заполнению'),
            address: Yup.string().required('Обязательно к заполнению'),
            phone: Yup.string().required('Обязательно к заполнению').matches(/^\+\d{1}\(\d{3}\)\-\d{3}\-\d{2}\-\d{2}$/, 'Некорректный номер'),
            email: Yup.string().email('Неаерный формат').required('Обязательно к заполнению'),
            delivery: Yup.string().required('Обязательно к заполнению'),
    });

    return (
        <section>
            <Container>
                <h2 className={s.title}>Оформление заказа</h2>
                <Formik initialValues={{
                                fio: '',
                                address: '',
                                phone: '',
                                email: '',
                                delivery: '',
                            }}
                        onSubmit={handleSubmitOrder}
                        validationSchema={validationSchema}
                    >
                    <Form className={s.form}>
                        <fieldset className={s.personal}>
                            <label className={s.label}>
                                <Field
                                    className={s.input}
                                    type='text'
                                    placeholder='ФИО*'
                                    name='fio'
                                />
                                <ErrorMessage className={s.error} name='fio' component={'span'} />
                            </label>
                            <label className={s.label}>
                                <Field
                                    className={s.input}
                                    type='text'
                                    placeholder='Адрес доставки'
                                    name='address'
                                />
                                <ErrorMessage className={s.error} name='address' component={'span'} />
                            </label>
                            <label className={s.label}>
                                <Field
                                    className={s.input}
                                    as={PatternFormat}
                                    format='+7(###)-###-##-##'
                                    mask='_'
                                    placeholder='Телефон'
                                    name='phone'
                                />
                                <ErrorMessage className={s.error} name='phone' component={'span'} />
                            </label>
                            <label className={s.label}>
                                <Field
                                    className={s.input}
                                    type='email'
                                    placeholder='Email*'
                                    name='email'
                                />
                                <ErrorMessage className={s.error} name='email' component={'span'} />
                            </label>
                        </fieldset>
                        <fieldset className={s.radioList}>
                            <label className={s.radio}>
                                <Field
                                    className={s.radioInput}
                                    type='radio'
                                    name='delivery'
                                    value='delivery'
                                />
                                <span>Доставка</span>
                            </label>
                            <label className={s.radio}>
                                <Field
                                    className={s.radioInput}
                                    type='radio'
                                    name='delivery'
                                    value='self'
                                />
                                <span>Самовывоз</span>
                            </label>
                            <ErrorMessage className={s.error} name='delivery' component={'span'} />
                        </fieldset>
                        <button className={s.submit} type='submit'>Оформить</button>
                    </Form>
                </Formik>
            </Container>
        </section>
    );
};