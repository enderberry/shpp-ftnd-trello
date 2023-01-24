import React, { ReactElement, ReactNode } from 'react';
import cls from './button.module.scss';
import childClassName from '../../funcs/childClassName';

interface ButtonProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  chClassName?: string[];
}

function Button({ children, className, chClassName }: ButtonProps): ReactElement {
  return <button className={`${cls.btn} ${className} ${childClassName(cls, chClassName || [])}`}>{children}</button>;
}

Button.defaultProps = {
  className: '',
  chClassName: []
};

export default Button;
