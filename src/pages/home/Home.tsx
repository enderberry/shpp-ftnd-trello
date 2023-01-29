import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Board from './components/Board';
import Header from '../../components/Header';
import Button from '../../components/UI/Button';

import cssModuleClasses from '../../funcs/cssModuleClasses';
import { fetchBoards } from '../../store/modules/boards/actions';
import { AppDispatch, RootState } from '../../store';

import cls from './home.module.scss';

function Home(): ReactElement {
  const dispatch: AppDispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.boards.boards);

  useEffect(() => {
    dispatch(fetchBoards());
  }, []);
  return (
    <div className={cls.home}>
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
            <div className={cssModuleClasses(cls, ['board', 'create-board'])}>
              <Button>
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
