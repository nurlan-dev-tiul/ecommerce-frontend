import React from 'react';
import clsx from 'clsx';
import Input from '../../forms/Input';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack} from "react-icons/bi";
import { registerSchemaValidation } from '../../../utils/validateSchema/auth';
import { fetchRegister } from '../../../store/ducks/auth/actionCreators';

import styles from '../Auth.module.scss';

export const Register = ({openLogin}) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(store => store.auth);

    //! React-hook-form и схема валидации
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(registerSchemaValidation)
    });

    const handleRegister = (data) => {
        dispatch(fetchRegister(data))
    }
    
    return (
        <FormProvider {...form}>
            <form className={styles.form} onSubmit={form.handleSubmit(handleRegister)}>
                <Input 
                    name='firstName' 
                    label='Имя' 
                    type='text' 
                />
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
                        ) : 'Зарегистрироваться'}
                </button>
            </form>
            <div className={styles.arrow_back_block} onClick={openLogin}>
                <BiArrowBack className={styles.arrow_back_icon}/>
                    Вернуться назад
            </div>
        </FormProvider>
    );
}

