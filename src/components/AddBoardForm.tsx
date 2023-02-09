import React, { ReactElement, useEffect, useRef, useState } from 'react';

import Input from './UI/Input';
import Button from './UI/Button';
import Modal from './UI/Modal';

import ICreateEvent from '../pages/home/interfaces/ICreateEvent';

import cls from './add_board_form.module.scss';

interface AddBoardFormState {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  onCreate?: (evt: ICreateEvent) => void;
}

function AddBoardForm({ opened, setOpened, onCreate }: AddBoardFormState): ReactElement {
  const [title, setTitle] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, [opened]);

  function onSubmit(event: React.FormEvent): void {
    event.preventDefault();
    onCreate?.({ title });
    setTitle('');
    setOpened(false);
  }

  return opened ? (
    <Modal className={cls.modal} setOpened={setOpened} opened>
      <form className={cls.form} onSubmit={onSubmit}>
        <p className="modal-title">New Board</p>
        <div className="modal-item">
          <label>
            Title:{' '}
            <Input
              required
              blph
              ref={titleRef}
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="modal-item">
          <Button className={cls.submit} chClassName={['btn_block', 'btn_colored']}>
            Create
          </Button>
        </div>
      </form>
    </Modal>
  ) : (
    <div />
  );
}

AddBoardForm.defaultProps = {
  onCreate: undefined
};

export default AddBoardForm;
