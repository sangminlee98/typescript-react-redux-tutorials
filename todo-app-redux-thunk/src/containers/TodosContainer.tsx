import React, { useCallback } from 'react';
import {changeInput, insert, remove, toggle} from '../modules/todos';
import Todos from '../components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';

const TodosContainer = () => {
  const {input, todos} = useSelector(({todos}: RootState) => ({input: todos.input, todos: todos.todos}));
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input: string) => dispatch(changeInput(input)),[dispatch]);
  const onInsert = useCallback((text: string) => dispatch(insert(text)),[dispatch]);
  const onToggle = useCallback((id: number) => dispatch(toggle(id)),[dispatch]);
  const onRemove = useCallback((id: number) => dispatch(remove(id)),[dispatch]);
  return (
  <Todos 
    input={input}
    todos={todos}
    onChangeInput={onChangeInput}
    onInsert={onInsert}
    onToggle={onToggle}
    onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
