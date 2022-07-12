import React, {useState} from 'react'
import { Login } from './Login';
import { Register } from './Register';
import { FaTimesCircle } from "react-icons/fa";

import styles from './Auth.module.scss';

export const Auth = ({closeModal}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isRegister, setIsRegister] = useState(false);


    const handleRegisterView = () => {
        setIsRegister(true);
        setIsLogin(false)
    }

    const handleLoginView = () => {
        setIsLogin(true)
        setIsRegister(false);
    }

    return (
        <div className={styles.auth_container}>
            <div className={styles.form_container}>
                <div className={styles.form_header}>
                    <h4>
                        {isLogin ? 'Авторизация' : null}
                        {isRegister ? 'Регистрация' : null}
                    </h4>
                </div>
                {isLogin ? <Login openRegister={handleRegisterView} /> : null }
                {isRegister ? <Register openLogin={handleLoginView}/> : null}
            </div>
            <div className={styles.img_container}>
                <FaTimesCircle className={styles.icon} onClick={() => closeModal(false)} />
            </div>
        </div>
    )
}
