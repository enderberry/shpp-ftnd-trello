import IBoardItem from '../../../interfaces/IBoardItem';
import api from '../../../api/request';
import { AppThunk } from '../../index';

export const fetchBoards = (): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const { boards }: { boards: IBoardItem[] } = await api.get('/board');
      dispatch({ type: 'UPDATE_BOARDS', payload: boards });
    } catch (e) {
      window.console.error(e);
      dispatch({ type: 'ERROR', payload: e });
    }
  };
