import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Board from './components/Board';
import Header from '../../components/Header';
import Button from '../../components/UI/Button';
import AddBoardForm from '../../components/AddBoardForm';

import { createBoard, fetchBoards } from '../../store/modules/boards/actions';

import ICreateEvent from './interfaces/ICreateEvent';
import { AppDispatch, RootState } from '../../store';

import cls from './home.module.scss';

function Home(): ReactElement {
  const dispatch: AppDispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.boards.boards);
  const [formOpened, setFormOpened] = useState(false);

  useEffect(() => {
    dispatch(fetchBoards());
  }, []);

  const onCreate = (event: ICreateEvent): void => {
    dispatch(createBoard(event));
  };

  return (
    <div className={cls.home}>
      <AddBoardForm opened={formOpened} setOpened={setFormOpened} onCreate={onCreate} />
      <div className="container">
        <Header />
        <section className="section">
          <h2 className="heading">My boards</h2>
          <div className={cls.boards}>
            {boards.map((board) => (
              <Link to={`/board/${board.id}`} key={board.id}>
                <Board title={board.title} className={cls.board} />
              </Link>
            ))}
            <div className={`${cls.board} ${cls.create_board}`}>
              <Button onClick={(): void => setFormOpened(true)}>
                <span>
                  <span className="bi bi-plus-lg x-bi-spr" /> Create new board
                </span>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
