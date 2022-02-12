import React from 'react';
import { Todo } from '../modules/todos';

type TodoItemProps = {
  todo: Todo,
  onToggle: (id: number) => void,
  onRemove: (id: number) => void,
};
type TodoProps = {
  input: any,
  todos: Todo[],
  onChangeInput: (input: any) => void,
  onInsert: (text: string) => void,
  onToggle: (id: number) => void,
  onRemove: (id: number) => void,
}

const TodoItem = ({todo, onToggle, onRemove}: TodoItemProps) => {
  return (
    <div>
      <input type="checkbox" 
      onClick={() => onToggle(todo.id)}
      checked={todo.done}
      readOnly={true}/>
      <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};
const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}: TodoProps) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}/>
        <button type='submit'>등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;