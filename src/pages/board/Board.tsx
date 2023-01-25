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
      cards: [
        { id: 1, title: 'посмотреть сериал' },
        { id: 2, title: 'посмотреть сериал' },
        { id: 3, title: 'посмотреть сериал' },
        { id: 4, title: 'посмотреть сериал' },
        { id: 5, title: 'посмотреть сериал' },
        { id: 6, title: 'посмотреть сериал' },
        { id: 7, title: 'посмотреть сериал' },
        { id: 8, title: 'посмотреть сериал' },
        { id: 9, title: 'посмотреть сериал' },
        { id: 10, title: 'посмотреть сериал' },
        { id: 11, title: 'посмотреть сериал' },
        { id: 12, title: 'посмотреть сериал' },
        { id: 13, title: 'посмотреть сериал' },
        { id: 14, title: 'посмотреть сериал' },
        { id: 15, title: 'посмотреть сериал' },
        { id: 16, title: 'посмотреть сериал' },
        { id: 17, title: 'посмотреть сериал' },
        { id: 18, title: 'посмотреть сериал' },
        { id: 19, title: 'посмотреть сериал' },
        { id: 20, title: 'посмотреть сериал' },
        { id: 21, title: 'посмотреть сериал' },
        { id: 22, title: 'посмотреть сериал' }
      ]
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
      <div className={cls.main}>
        <div className={cls.header}>
          <div>
            <a href="/">
              <Button className={cls.back_btn} chClassName={['btn_smtsp']}>
                <i className="bi bi-house-door-fill x-bi-spr" /> Home
              </Button>
            </a>
          </div>
          <h1 className={cls.title}>{title}</h1>
        </div>
        <div className={cls.lists_wrapper}>
          <div className={cls.lists}>
            {lists.map((list) => (
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
