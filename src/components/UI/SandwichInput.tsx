import React, { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';

import Button from './Button';
import Input from './Input';

import useEvent, { IListener } from '../../hooks/useEvent';
import cls from './sandwich_input.module.scss';

interface SandwichInputProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  sdwClassName?: string;
  btnText?: string;
  inputHint?: string;
  opened?: boolean;
  setOpened?: (opened: boolean) => void;
  onSubmit?: any;
}

const evtBucket: IListener[] = [];

function SandwichInput({
  children,
  className,
  sdwClassName,
  btnText,
  inputHint,
  opened,
  setOpened,
  onSubmit
}: SandwichInputProps): ReactElement {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  let missedCB: () => void;
  function closeInput(apply = true): void {
    if (!opened) return;
    setOpened?.(false);
    document.body.removeEventListener('click', missedCB);
    if (apply) onSubmit?.(value.trim());
    setValue('');
  }
  missedCB = (): void => {
    closeInput(false);
  };

  useEffect(() => {
    if (opened) {
      setTimeout(() => document.body.addEventListener('click', missedCB), 10); // I know this is a bad solution :/
      inputRef.current?.focus();
    }

    return () => document.body.removeEventListener('click', missedCB);
  }, [opened, inputRef.current]);

  useEvent(
    [
      {
        target: window,
        eventName: 'x-confirm',
        callback: () => closeInput()
      },
      {
        target: window,
        eventName: 'x-escape',
        callback: () => closeInput(false)
      }
    ],
    evtBucket
  );

  return (
    <div className={`${cls.sandwich_input_wrapper} ${opened ? cls.active : ''} ${className}`}>
      <div className={cls.children}>{children}</div>
      <div className={`${cls.sandwich_input} ${sdwClassName}`} onClick={(e): void => e.stopPropagation()}>
        <div>
          <Input
            className={cls.input}
            placeholder={inputHint}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value)}
            ref={inputRef}
          />
        </div>
        <div>
          <Button
            className={`${cls.btn} ${cls.submit_btn}`}
            chClassName={['btn_colored']}
            onClick={(): void => closeInput()}
          >
            {btnText}
          </Button>
          <Button className={`${cls.btn} ${cls.close_btn}`} onClick={(): void => closeInput(false)}>
            <i className="bi bi-x-lg" />
          </Button>
        </div>
      </div>
    </div>
  );
}

SandwichInput.defaultProps = {
  children: [],
  className: '',
  sdwClassName: '',
  btnText: 'Submit',
  inputHint: '',
  opened: false,
  setOpened: undefined,
  onSubmit: undefined
};

export default SandwichInput;
