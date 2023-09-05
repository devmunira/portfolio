import React from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    title: string;
    customClass?: string;
    handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', title = 'Get In Touch', customClass = '', handleClick }) => {
    return (
        <button type={type} className={`main__btn ${customClass}`} onClick={handleClick}>
            {title}
        </button>
    );
};

export default Button;
