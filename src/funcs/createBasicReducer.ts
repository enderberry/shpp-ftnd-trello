type TActHnd<R> = (state: R, payload?: any) => R;

interface IAction {
  type: string;
  payload?: any;
}

export default function createBasicReducer<T>(
  initialState: T,
  callbacks: {
    def: TActHnd<T>;
    before?: (state: T, payload?: IAction) => { end?: boolean; state?: T; data: object };
    actions?: { [a: string]: TActHnd<T> };
  }
): (state: T | undefined, action: IAction) => T {
  return function (state = initialState, action?: IAction) {
    let bData;

    if (callbacks.before) {
      const { end: bEnd, state: bState, data: $bData } = callbacks.before(state, action);
      if (bEnd) return bState || state;
      bData = $bData;
    }
    return (
      action && callbacks.actions && action.type in callbacks.actions ? callbacks.actions[action.type] : callbacks.def
    ).call(bData, state, action?.payload);
  };
}
