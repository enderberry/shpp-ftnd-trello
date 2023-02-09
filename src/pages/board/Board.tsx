import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import Loading from '../../components/Loading';
import List from './components/List';
import Button from '../../components/UI/Button';
import ContentInput from '../../components/UI/ContentInput';
import SandwichInput from '../../components/UI/SandwichInput';

import useLoading from '../../hooks/useLoading';
import { editBoard, fetchBoard, createList, editList, createCard, editCard } from '../../store/modules/board/actions';
import { AppDispatch, RootState } from '../../store';
import Identifier from '../../types/Identifier';

import cls from './board.module.scss';

function Board(): ReactElement {
  const { board_id: boardId = '' } = useParams<{ board_id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const [notFound, setNotFound] = useState(false);
  const [addListOpened, setAddListOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const board = useSelector((state: RootState) => state.board.board);
  useEffect(() => {
    useLoading(async () => {
      await dispatch(fetchBoard(boardId));
    }, setLoading)();
  }, []);

  const onAddList = useLoading(async (title: string): Promise<void> => {
    await dispatch(createList(boardId, { title, position: board.lists.length }));
  }, setLoading);
  const onAddCard = useLoading(async (listId: Identifier, title: string): Promise<void> => {
    const position = board.lists.find(({ id }) => id === listId)?.cards.length;
    if (position === undefined) throw new ReferenceError('List not found');
    await dispatch(createCard(boardId, listId, { title, position }));
  }, setLoading);
  const onBoardTitleChange = useLoading(async (value: string): Promise<void> => {
    await dispatch(editBoard(boardId, { title: value }));
  }, setLoading);
  const onListTitleChange = useLoading(async (listId: Identifier, value: string): Promise<void> => {
    await dispatch(editList(boardId, listId, { title: value }));
  }, setLoading);
  const onCardTitleChange = useLoading(async (listId: Identifier, cardId: Identifier, value: string): Promise<void> => {
    // Will be used soon (maybe)...
    await dispatch(editCard(boardId, listId, cardId, { title: value }));
  }, setLoading);

  return (
    <div className={cls.board}>
      {loading && <Loading />}
      <div className={cls.main}>
        <div className={cls.header}>
          <div>
            <Link to="/">
              <Button className={cls.back_btn} chClassName={['btn_smtsp']}>
                <i className="bi bi-house-door-fill x-bi-spr" /> Home
              </Button>
            </Link>
          </div>
          <ContentInput
            tagName="h1"
            className={cls.title}
            genClassName={cls.title_ci_gen}
            textClassName={cls.title_ci_text}
            inputClassName={cls.title_ci_input}
            value={`${board.title}${notFound ? ' [Not Found]' : ''}`}
            onChange={onBoardTitleChange}
          />
        </div>
        <div className={cls.lists_wrapper}>
          <div className={cls.lists}>
            {board.lists.map((list) => (
              <div className={cls.list_wrapper} key={list.id}>
                <List
                  title={list.title}
                  cards={list.cards}
                  className={cls.list}
                  changeTitle={(nt: string): Promise<void> => onListTitleChange(list.id, nt)}
                  addCard={(t: string): Promise<void> => onAddCard(list.id, t)}
                />
              </div>
            ))}
            <div className={cls.add_btn_wrapper}>
              <SandwichInput
                opened={addListOpened}
                setOpened={setAddListOpened}
                btnText="Add list"
                inputHint="Enter list title..."
                onSubmit={onAddList}
              >
                <Button
                  className={cls.add_list_btn}
                  chClassName={['btn_smtsp']}
                  onClick={(): void => setAddListOpened(true)}
                >
                  <i className="bi bi-plus-lg x-bi-spr" /> Add another list
                </Button>
              </SandwichInput>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
