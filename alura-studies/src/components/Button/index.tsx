import React from 'react';
import style from './Button.module.scss';

interface IButtonProps {
    type?: "button" | "submit" | "reset" | undefined, 
    children?: React.ReactNode,
    onClick?: () => void
}

function Button ({ type, children, onClick }: IButtonProps){
        return (
            <button 
                type={type} 
                onClick={onClick}
                className={style.botao}>
                {children}
            </button>
        )
    }


export default Button;



