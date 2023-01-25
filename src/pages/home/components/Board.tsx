import React, { ReactElement } from 'react';

import cls from './board.module.scss';

interface BoardProps {
  title: string;
  className?: string;
}

function Board({ title, className }: BoardProps): ReactElement {
  return (
    <div className={`${cls.board} ${className}`}>
      <h2>{title}</h2>
    </div>
  );
}

Board.defaultProps = {
  className: ''
};

export default Board;
