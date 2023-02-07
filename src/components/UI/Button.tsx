import React, { ReactElement, ReactNode } from 'react';

import cssModuleClasses from '../../funcs/cssModuleClasses';
import cls from './button.module.scss';

interface ButtonProps {
  children?: ReactNode[] | ReactNode;
  className?: string;
  chClassName?: string[];
  [a: string]: any;
}

function Button({ children, className, chClassName, ...props }: ButtonProps): ReactElement {
  return (
    <button className={`${cls.btn} ${className} ${cssModuleClasses(cls, chClassName || [])}`} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: '',
  className: '',
  chClassName: []
};

export default Button;
