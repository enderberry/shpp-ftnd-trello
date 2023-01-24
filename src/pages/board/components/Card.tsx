import React, { ReactElement } from 'react';

import cls from './card.module.scss';

interface CardProps {
  title: string;
  className?: string;
}

function Card({ title, className }: CardProps): ReactElement {
  return (
    <div className={`${cls.card} ${className}`}>
      <h3>{title}</h3>
    </div>
  );
}

Card.defaultProps = {
  className: ''
};

export default Card;
