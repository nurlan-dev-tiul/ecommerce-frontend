import clsx from 'clsx';
import Input from '../../forms/Input';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginSchemaValidation } from '../../../utils/validateSchema/auth';
import { fetchLogin } from '../../../store/ducks/auth/actionCreators';
import styles from '../Auth.module.scss';


export const Login = ({openRegister}) => {

    const dispatch = useDispatch();
    const { loading } = useSelector(store => store.auth);

    //! React-hook-form и схема валидации
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(loginSchemaValidation)
    });

    const handleLogin = (data) => {
        dispatch(fetchLogin(data))
    }

    return (
        <FormProvider {...form}>
            <form className={styles.form} onSubmit={form.handleSubmit(handleLogin)}>
                <Input 
                    name='email' 
                    label='Email адрес' 
                    type='text'
                />
                <Input 
                    name='password' 
                    label='Пароль' 
                    type='password' 
                />
                <button 
                    type="submit" 
                    className={clsx("btn btn-primary", styles.form_btn)}
                    >
                        {loading ? (
                            <div className={clsx("spinner-border text-light", styles.loading_spinner)} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : 'Войти'}
                </button>
            </form>
            <div className={styles.register_link} onClick={openRegister}>
                Регистрация
            </div>
        </FormProvider>
    );
}
