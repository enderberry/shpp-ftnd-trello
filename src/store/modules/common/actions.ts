import { AnyAction } from 'redux';

export default (e: Error): AnyAction => ({ type: 'ERROR', payload: e });
