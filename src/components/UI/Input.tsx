import React, { forwardRef, ReactElement, RefObject } from 'react';

import cls from './input.module.scss';

interface InputProps {
  className?: string;
  blph?: boolean; // Blank Placeholder
  [a: string]: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, blph, ...props }: InputProps, ref): ReactElement => (
    <input className={`${cls.input} ${className}`} placeholder={blph ? ' ' : ''} ref={ref} {...props} />
  )
);

Input.displayName = 'Input';
Input.defaultProps = {
  className: '',
  blph: false
};

export default Input;
