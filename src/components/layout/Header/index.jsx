import React, {useState, useEffect} from 'react'
import Modal from '../../modal';
import { useSelector, useDispatch } from 'react-redux';
import { Auth } from '../../auth';
import { Link } from 'react-router-dom';
import { logout } from '../../../store/ducks/auth/actionCreators';
import { removeLocalStorage } from '../../../services/localStorage';
import { Search } from '../Search';
import { Menu } from '../Menu';
import clsx from 'clsx';
import { 
    AiOutlineMail,
    AiOutlineUser,
    AiOutlinePhone
} from "react-icons/ai";

import styles from './Header.module.scss';



export const Header = () => {

    const [visableModal, setVisableModal] = useState(false);
    const dispatch = useDispatch()
    const { user, isAuth, loading } = useSelector(store => store.auth);

    useEffect(() => {
        if(isAuth){
            setVisableModal(false);
        }
    }, [isAuth]);

    //! Выход из системы
    const handleLogout = () => {
        removeLocalStorage();
        dispatch(logout());
    }


    return (
        <header className={styles.header}>
            <div className={styles.header_top}>
                <div className={styles.header_top_left}>
                    <div className={styles.header_mail}>
                        <AiOutlineMail className={styles.header_icon}/>
                        <span>shop@shopping.com</span>
                    </div>
                    <div className={styles.devider}></div>
                    <div className={styles.header_mail}>
                        <AiOutlinePhone className={styles.header_icon}/>
                        <span>+ (996) 707-266-860</span>
                    </div>
                </div>
                <div className={styles.header_top_right}>
                    <Menu />
                    <div className={styles.devider}></div>
                    {isAuth ? (
                        <li className={clsx("nav-item dropdown", styles.username_text)}>
                            <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user?.firstName}
                            </span>
                            <ul className={clsx("dropdown-menu", styles.dropdown)} aria-labelledby="navbarDropdown">
                                <li><span className="dropdown-item">Профиль</span></li>
                                {user?.isAdmin && <li>
                                    <Link className="dropdown-item" to='/admin'>Админ панель</Link>
                                </li>}
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <span 
                                        className="dropdown-item"
                                        onClick={handleLogout}
                                    >
                                        Выйти
                                    </span>
                                </li>
                            </ul>
                        </li>
                        ) : (
                            <>
                                <AiOutlineUser />
                                <span className={styles.auth_btn} onClick={() => setVisableModal(true)}>Войти</span>
                            </>
                        )
                    }
                </div>
            </div>
            <div className={styles.header_menu}>
                <Search />
            </div>
            <Modal active={visableModal} setActive={setVisableModal}>
                <Auth closeModal={setVisableModal} />
            </Modal>
        </header>
    )
}
