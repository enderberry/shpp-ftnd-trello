import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import List from './components/List';
import Button from '../../components/UI/Button';

import { fetchBoard } from '../../store/modules/board/actions';
import { AppDispatch, RootState } from '../../store';

import cls from './board.module.scss';

function Board(): ReactElement {
  const { board_id: boardId = '' } = useParams<{ board_id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const [notFound, setNotFound] = useState(false);

  const board = useSelector((state: RootState) => state.board.board);
  useEffect(() => {
    dispatch(fetchBoard(boardId, setNotFound));
  }, []);

  return (
    <div className={cls.board}>
      <div className={cls.main}>
        <div className={cls.header}>
          <div>
            <Link to="/">
              <Button className={cls.back_btn} chClassName={['btn_smtsp']}>
                <i className="bi bi-house-door-fill x-bi-spr" /> Home
              </Button>
            </Link>
          </div>
          <h1 className={cls.title}>
            {board.title} {boardId} {notFound && '[Not Found]'}
          </h1>
        </div>
        <div className={cls.lists_wrapper}>
          <div className={cls.lists}>
            {board.lists.map((list) => (
              <div className={cls.list_wrapper} key={list.id}>
                <List title={list.title} cards={list.cards} className={cls.list} />
              </div>
            ))}
            <div className={cls.add_btn_wrapper}>
              <Button className={cls.add_list_btn} chClassName={['btn_smtsp']}>
                <i className="bi bi-plus-lg x-bi-spr" /> Add another list
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
