type TActHnd<R> = (a1: R, a2?: any) => R;

interface IAction {
  type: string;
  payload?: any;
}

export default function createBasicReducer<T>(
  initialState: T,
  callbacks: {
    def: TActHnd<T>;
    before?: (a1: T, a2?: IAction) => { end?: boolean; state?: T; data: object };
    actions?: { [a: string]: TActHnd<T> };
  }
): (a1: T | undefined, a2: IAction) => T {
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
