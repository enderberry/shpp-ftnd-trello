import createBasicReducer from '../../../funcs/createBasicReducer';
import IBoard from '../../../interfaces/IBoard';

export default createBasicReducer<object>(
  {},
  {
    def: (state) => state,
    actions: {
      ERROR(state, payload: IBoard) {
        window.console.error(payload);
        return state;
      }
    }
  }
);
