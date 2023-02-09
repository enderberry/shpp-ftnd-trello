import { useEffect } from 'react';

type EvtCb = (evt?: any) => void | boolean;

interface IListener {
  target: Window | Document | HTMLElement;
  eventName: string;
  callback: EvtCb;
}

export default function useEvent(
  listeners: IListener[],
  evtBucket: IListener[] = [],
  deps: undefined | any[] = undefined
): void {
  const applyListenerMethod = (arr: IListener[], mth: string): void => {
    arr.forEach(({ target, eventName, callback }) => {
      (target[mth as keyof typeof target] as (name: string, cb: EvtCb) => void).call(target, eventName, callback);
    });
  };

  const update = (): void => {
    applyListenerMethod(evtBucket, 'removeEventListener');
    while (evtBucket.length) evtBucket.pop();
    applyListenerMethod(listeners, 'addEventListener');
    Object.assign(evtBucket, listeners);
  };

  if (!deps) update();
  useEffect(() => {
    if (deps) update();
    return () => applyListenerMethod(evtBucket, 'removeEventListener');
  }, deps || []);
}

export { type IListener };
