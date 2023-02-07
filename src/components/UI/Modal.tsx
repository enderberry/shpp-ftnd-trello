import React, { ReactElement, ReactNode, useEffect } from 'react';

import cls from './modal.module.scss';

interface ModalProps {
  children?: ReactNode | ReactNode[];
  opened?: boolean;
  className?: string;
  setOpened?: (a1: boolean) => void;
  [a: string]: any;
}

function Modal({ children, opened, className, setOpened, ...props }: ModalProps): ReactElement {
  const close = (): void => setOpened?.(false);
  useEffect(() => {
    window.addEventListener('x-escape', close);
    return () => window.removeEventListener('x-escape', close);
  }, []);

  return (
    <div className={`${cls.modal_wrapper} ${opened ? cls.open : ''}`} onClick={close} {...props}>
      <div className={`${cls.modal} ${className}`} onClick={(e): void => e.stopPropagation()}>
        <span className={`bi bi-x-lg ${cls.close}`} onClick={close} />
        {children}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  children: '',
  opened: false,
  className: '',
  setOpened: undefined
};

export default Modal;
