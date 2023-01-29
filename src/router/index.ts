import { ReactElement } from 'react';

import Home from '../pages/home/Home';
import Board from '../pages/board/Board';
import NotFound from '../pages/404/404';

interface IRoute {
  path: string;
  component: () => ReactElement;
}

export const routes: IRoute[] = [
  { path: '/', component: Home },
  { path: '/board/:board_id', component: Board },
  { path: '*', component: NotFound }
];
