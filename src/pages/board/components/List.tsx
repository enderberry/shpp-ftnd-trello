import React, { ReactElement } from 'react';
import ICard from '../../../interfaces/ICard';

import Card from './Card';
import Button from '../../../components/UI/Button';

import cls from './list.module.scss';

interface ListProps {
  title: string;
  cards: ICard[];
  className?: string;
}

function List({ title, cards, className }: ListProps): ReactElement {
  return (
    <div className={`${cls.list} ${className}`}>
      <h2 className={cls.title}>{title}</h2>
      <div>
        {cards.map((card) => (
          <Card title={card.title} key={card.id} className={cls.card} />
        ))}
        <div>
          <Button className={cls.add_btn} chClassName={['btn_tsp']}>
            <i className="bi bi-plus-lg x-bi-spr" /> Add a card
          </Button>
        </div>
      </div>
    </div>
  );
}

List.defaultProps = {
  className: ''
};

export default List;
