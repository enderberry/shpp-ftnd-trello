import createBasicReducer from '../../../funcs/createBasicReducer';
import IBoardItem from '../../../interfaces/IBoardItem';

interface IBoardsState {
  boards: IBoardItem[];
}

export default createBasicReducer<IBoardsState>(
  {
    boards: []
  },
  {
    def: (state) => state,
    actions: {
      UPDATE_BOARDS(state, payload: IBoardItem[]) {
        return { ...state, boards: [...payload] };
      }
    }
  }
);
