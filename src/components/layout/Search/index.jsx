import clsx from 'clsx';
import React from 'react'
import Logo from '../../../assets/logo.png';
import { 
    AiOutlineShopping,
    AiTwotoneHeart
} from "react-icons/ai";
import styles from './Search.module.scss';

export const Search = () => {
    return (
        <div className={styles.header_nav}>
            <div className={styles.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={clsx("input-group mb-3", styles.header_search)}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Найти ..." 
                    aria-describedby="button-addon2" 
                />
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2"
                >
                    Найти
                </button>
            </div>
            <div className={styles.add_item}>
                <AiOutlineShopping />
                <span>Корзина</span>
            </div>
        </div>
    )
}
