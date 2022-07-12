import clsx from "clsx";
import React from "react";
import styles from './Modal.module.scss';

const Modal = ({children, active, setActive}) => {
    return (
        <div className={clsx(styles.modal, {[styles.active]: active})} 
            onClick={() => setActive(false)}
        >
            <div className={clsx(styles.modal_content, {[styles.content_active]: active})} 
                onClick={e => e.stopPropagation()}
            >
                <div className="modal_body">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default Modal;