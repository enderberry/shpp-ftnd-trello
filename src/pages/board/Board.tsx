import React, { ReactElement, useState } from 'react';
import IList from '../../interfaces/IList';

import List from './components/List';
import Button from '../../components/UI/Button';

import cls from './board.module.scss';

function Board(): ReactElement {
  const [title, setTitle] = useState('Моя тестовая доска');
  const [lists, setLists]: [lists: IList[], setValue: (value: IList[]) => void] = useState([
    {
      id: 1,
      title: 'Планы',
      cards: [
        { id: 1, title: 'помыть кота' },
        { id: 2, title: 'приготовить суп' },
        { id: 3, title: 'сходить в магазин' }
      ]
    },
    {
      id: 2,
      title: 'В процессе',
      cards: [{ id: 4, title: 'посмотреть сериал' }]
    },
    {
      id: 3,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' }
      ]
    },
    {
      id: 4,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' }
      ]
    },
    {
      id: 5,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' }
      ]
    },
    {
      id: 6,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' }
      ]
    },
    {
      id: 7,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' }
      ]
    },
    {
      id: 8,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' }
      ]
    }
  ]);

  return (
    <div className={cls.board}>
      <h1 className={cls.title}>{title}</h1>
      <div className={cls.lists_wrapper}>
        <div className={cls.lists}>
          {lists.map((list) => (
            <List title={list.title} cards={list.cards} className={cls.list} key={list.id} />
          ))}
          <div className={cls.add_btn_wrapper}>
            <Button className={cls.add_btn} chClassName={['btn_smtsp']}>
              <i className="bi bi-plus-lg x-bi-spr" /> Add another list
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
