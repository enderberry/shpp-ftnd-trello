import { ReactElement } from 'react';
import Home from '../pages/home/Home';
import Board from '../pages/board/Board';

interface IRoute {
  path: string;
  component: () => ReactElement;
}

export const routes: IRoute[] = [
  { path: '/', component: Home },
  { path: '/board', component: Board }
];
