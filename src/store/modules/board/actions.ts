import { AppThunk } from '../../index';
import api from '../../../api/request';
import errorAction from '../common/actions';

import Identifier from '../../../types/Identifier';

export const fetchBoard = (id: Identifier): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const board = await api.get(`/board/${id}`);
      dispatch({ type: 'UPDATE_BOARD', payload: board });
    } catch (e: any) {
      dispatch(errorAction(e));
    }
  };
export const editBoard = (id: Identifier, data: { title?: string }): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const res = await api.put(`/board/${id}`, data);
      await dispatch(fetchBoard(id));
      window.console.log(res);
    } catch (e: any) {
      dispatch(errorAction(e));
    }
  };
export const createList = (boardId: Identifier, data: { title: string; position: number }): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const res = await api.post(`/board/${boardId}/list`, data);
      await dispatch(fetchBoard(boardId));
      window.console.log(res);
    } catch (e: any) {
      dispatch(errorAction(e));
    }
  };
export const editList = (
  boardId: Identifier,
  listId: Identifier,
  data: { title?: string; position?: number }
): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const res = await api.put(`/board/${boardId}/list/${listId}`, data);
      await dispatch(fetchBoard(boardId));
      window.console.log(res);
    } catch (e: any) {
      dispatch(errorAction(e));
    }
  };
export const createCard = (
  boardId: Identifier,
  listId: Identifier,
  data: { title: string; position: number }
): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const res = await api.post(`/board/${boardId}/card`, { list_id: listId, ...data });
      await dispatch(fetchBoard(boardId));
      window.console.log(res);
    } catch (e: any) {
      dispatch(errorAction(e));
    }
  };
export const editCard = (
  boardId: Identifier,
  listId: Identifier,
  cardId: Identifier,
  data: { title?: string; position?: number }
): AppThunk =>
  async function (dispatch): Promise<void> {
    try {
      const res = await api.put(`/board/${boardId}/card/${cardId}`, { list_id: listId, ...data });
      await dispatch(fetchBoard(boardId));
      window.console.log(res);
    } catch (e: any) {
      dispatch(errorAction(e));
    }
  };
