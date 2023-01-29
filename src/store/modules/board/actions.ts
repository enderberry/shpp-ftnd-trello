import { AppThunk } from '../../index';
import IBoard from '../../../interfaces/IBoard';
import api from '../../../api/request';

export const fetchBoard = (id: number | string, setNotFound: (a1: boolean) => void): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const { board }: { board: IBoard } = await api.get(`/board/${id}`);
      dispatch({ type: 'UPDATE_BOARD', payload: board });
    } catch (e) {
      window.console.error(e);
      setNotFound(true);
      dispatch({ type: 'ERROR', payload: e });
    }
  };
