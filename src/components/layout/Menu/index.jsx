import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export const Menu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <Link className={styles.menu_link} to='/'>
                    Главная
                </Link>
            </li>
            <li>
                <Link className={styles.menu_link} to='/'>
                    Магазин
                </Link>
            </li>
            <li>
                <Link className={styles.menu_link} to='/'>
                    Контакты
                </Link>
            </li>
        </ul>
    )
}
