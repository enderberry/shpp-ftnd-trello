import api from '../../../api/request';
import errorAction from '../common/actions';

import { AppThunk } from '../../index';
import IBoardItem from '../../../interfaces/IBoardItem';

export const fetchBoards = (): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const { boards }: { boards: IBoardItem[] } = await api.get('/board');
      dispatch({ type: 'UPDATE_BOARDS', payload: boards });
    } catch (e: any) {
      dispatch(errorAction(e));
    }
  };
export const createBoard = (board: { title: string }): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const res = await api.post('/board', board);
      await dispatch(fetchBoards());
      window.console.log(res);
    } catch (e: any) {
      dispatch(errorAction(e));
    }
  };
