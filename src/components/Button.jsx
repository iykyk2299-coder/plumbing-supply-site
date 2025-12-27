import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    iconPosition = 'right',
    ...props
}) => {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;

    return (
        <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
            {Icon && iconPosition === 'left' && <Icon size={20} />}
            {children}
            {Icon && iconPosition === 'right' && <Icon size={20} />}
        </button>
    );
};

export default Button;
