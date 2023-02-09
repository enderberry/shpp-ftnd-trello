import createBasicReducer from '../../../funcs/createBasicReducer';
import dispatchCustomEvent from '../../../funcs/dispatchCustomEvent';
import IBoard from '../../../interfaces/IBoard';

export default createBasicReducer<object>(
  {},
  {
    def: (state) => state,
    actions: {
      ERROR(state, payload: IBoard) {
        window.console.error(payload);
        dispatchCustomEvent('error', payload);
        return state;
      }
    }
  }
);
