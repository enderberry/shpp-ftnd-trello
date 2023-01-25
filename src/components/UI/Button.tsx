import React, { ReactElement, ReactNode } from 'react';
import cls from './button.module.scss';
import cssModuleClasses from '../../funcs/cssModuleClasses';

interface ButtonProps {
  children?: ReactNode[] | ReactNode;
  className?: string;
  chClassName?: string[];
}

function Button({ children, className, chClassName }: ButtonProps): ReactElement {
  return <button className={`${cls.btn} ${className} ${cssModuleClasses(cls, chClassName || [])}`}>{children}</button>;
}

Button.defaultProps = {
  children: '',
  className: '',
  chClassName: []
};

export default Button;
