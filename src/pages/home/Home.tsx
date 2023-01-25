import React, { ReactElement, useState } from 'react';
import Board from './components/Board';

import img_logo from '../../assets/img/logo.png';
import cls from './home.module.scss';
import Header from '../../components/Header';
import cssModuleClasses from '../../funcs/cssModuleClasses';
import Button from '../../components/UI/Button';

function Home(): ReactElement {
  const [boards, setBoards] = useState([
    { id: 1, title: 'Lorem Ipsum' },
    { id: 2, title: 'Dolor Sit' },
    { id: 3, title: 'Amet Consectetur' },
    { id: 4, title: 'Adipiscing Elit' },
    { id: 5, title: 'Sed Do Eiusmod' },
    { id: 6, title: 'Tempor Incididunt' }
  ]);
  return (
    <div className={cls.home}>
      <div className="container">
        <Header />
        <section className="section">
          <h2 className="heading">My boards</h2>
          <div className={cls.boards}>
            {boards.map((board) => (
              <a href="/board" key={board.id}>
                <Board title={board.title} className={cls.board} />
              </a>
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
