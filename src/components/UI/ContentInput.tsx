import React, { ReactElement, useRef, useState } from 'react';

import useEvent, { IListener } from '../../hooks/useEvent';
import cls from './content_input.module.scss';

interface ContentInputProps {
  tagName?: string;
  value?: string;
  className?: string;
  genClassName?: string;
  textClassName?: string;
  inputClassName?: string;
  onChange?: (a1: string) => void;
}

const evtBucket: IListener[] = [];

function ContentInput({
  tagName,
  value = '',
  className,
  genClassName,
  textClassName,
  inputClassName,
  onChange
}: ContentInputProps): ReactElement {
  const [edit, setEdit] = useState(false);
  const [eValue, setEValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput(): void {
    setEdit(true);
    setEValue(value);
    setTimeout((): void => inputRef.current?.focus());
  }
  function blurInput(apply = true): void {
    if (!edit) return;
    setEdit(false);
    if (apply && eValue !== value) onChange?.(eValue.trim());
  }

  useEvent(
    [
      {
        target: window,
        eventName: 'x-confirm',
        callback: () => blurInput()
      },
      {
        target: window,
        eventName: 'x-escape',
        callback: () => blurInput(false)
      }
    ],
    evtBucket
  );

  return React.createElement(
    tagName || '',
    { className: `${cls.content_input} ${className}` },
    <>
      <span className={`${cls.text} ${genClassName} ${textClassName}`} onClick={(): void => focusInput()}>
        {value}
      </span>
      {edit && (
        <input
          ref={inputRef}
          className={`${cls.input} ${genClassName} ${inputClassName}`}
          value={eValue}
          onChange={(e): void => setEValue(e.target.value)}
          onBlur={(): void => blurInput()}
        />
      )}
    </>
  );
}

ContentInput.defaultProps = {
  tagName: 'span',
  value: '',
  className: '',
  genClassName: '',
  textClassName: '',
  inputClassName: '',
  onChange: undefined
};

export default ContentInput;
