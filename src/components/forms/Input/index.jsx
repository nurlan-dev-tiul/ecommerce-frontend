import React, {useState} from 'react';
import clsx from 'clsx';
import { useFormContext, useFormState } from 'react-hook-form';
import { BiShow, BiHide } from "react-icons/bi";

import styles from './Input.module.scss';

const Input = ({name, label, type, className, error}) =>{

    const [showPassword, setShowPassword] = useState(false)
    const { register, formState } = useFormContext();

    

    return(
        <>
            <div className={styles.input_block}>
                <input 
                    {...register(name)}
                    className={clsx(className, styles.input)}
                    type={type !== 'password' ? type : showPassword ? 'text' : 'password'} 
                    placeholder={label}
                    name={name}
                />
                {type === 'password' && (
                    <div onClick={() => setShowPassword(!showPassword)}>
                        { showPassword ? (
                            <BiShow className={styles.pass_icon} /> ) : ( 
                            <BiHide className={styles.pass_icon} /> 
                        )}
                    </div>)
                }
            </div>
            <span className={styles.error}>{formState.errors[name]?.message}</span>
        </>
    )

}

export default Input;