import { ActionType, createAction, createReducer } from 'typesafe-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; 
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT)<string>();
export const insert = createAction(INSERT)<string>();
export const toggle = createAction(TOGGLE)<number>();
export const remove = createAction(REMOVE)<number>();

type TodosAction = 
| ActionType<typeof changeInput> 
| ActionType<typeof insert> 
| ActionType<typeof toggle> 
| ActionType<typeof remove>;

export type TodoState = {
  id: number,
  text: string,
  done: boolean
}
type TodosState = {
  input: string,
  todos: TodoState[]
};
const initialState: TodosState = {
  input: '',
  todos: []
};
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    input: action.payload
  }),
  [INSERT]: (state, action) => ({
    ...state,
    todos: state.todos.concat({
      id: state.todos.length === 0 ? 1 : Math.max(...state.todos.map(todo => todo.id))+1,
      text: action.payload,
      done: false
    })
  }),
  [TOGGLE]: (state, action) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo )
  }),
  [REMOVE]: (state, action) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.payload)
  })
})

export default todos;