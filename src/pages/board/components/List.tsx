import React, { ReactElement, useState } from 'react';

import Card from './Card';
import Button from '../../../components/UI/Button';
import ContentInput from '../../../components/UI/ContentInput';
import SandwichInput from '../../../components/UI/SandwichInput';

import ICard from '../../../interfaces/ICard';
import cls from './list.module.scss';

interface ListProps {
  title: string;
  cards: ICard[];
  className?: string;
  changeTitle?: (a1: string) => void;
  addCard?: (a1: string) => void;
}

function List({ title, cards, className, changeTitle, addCard }: ListProps): ReactElement {
  const [addCardOpened, setAddCardOpened] = useState(false);

  return (
    <div className={`${cls.list} ${className}`}>
      <ContentInput
        tagName="h2"
        className={cls.title}
        genClassName={cls.title_ci_gen}
        textClassName={cls.title_ci_text}
        inputClassName={cls.title_ci_input}
        value={title}
        onChange={(nt: string): void => changeTitle?.(nt)}
      />
      <div className={cls.cards}>
        {cards.map((card) => (
          <Card title={card.title} key={card.id} className={cls.card} />
        ))}
      </div>
      <div className={cls.add_btn_wrapper}>
        <SandwichInput
          opened={addCardOpened}
          setOpened={setAddCardOpened}
          btnText="Add card"
          inputHint="Enter a title for this card..."
          onSubmit={addCard}
        >
          <Button className={cls.add_btn} chClassName={['btn_tsp']} onClick={(): void => setAddCardOpened(true)}>
            <i className="bi bi-plus-lg x-bi-spr" /> Add a card
          </Button>
        </SandwichInput>
      </div>
    </div>
  );
}

List.defaultProps = {
  className: '',
  changeTitle: undefined,
  addCard: undefined
};

export default List;
