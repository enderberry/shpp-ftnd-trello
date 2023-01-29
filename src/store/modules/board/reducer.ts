import createBasicReducer from '../../../funcs/createBasicReducer';
import IBoard from '../../../interfaces/IBoard';

interface IBoardState {
  board: IBoard;
}

export default createBasicReducer<IBoardState>(
  {
    board: {
      title: '',
      lists: []
    }
  },
  {
    def: (state) => state,
    actions: {
      UPDATE_BOARD(state, payload: IBoard) {
        return { ...state, board: payload };
      }
    }
  }
);
