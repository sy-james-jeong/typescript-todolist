// Import stylesheets
import './style.css';

// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

// api
function fetchTodoItems() {
  const todos = [
    { id: 1, title: 'Hi', done: false },
    { id: 2, title: 'Type', done: false },
    { id: 3, title: 'Script', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object {
  return todoItems.filter((item: any) => item.done);
}

function addTwoTodoItems(): void { 
  addTodo({ id: 4, title: 'system1', done: false });
  addTodo({ id: 5, title: 'system2', done: false });
}

function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
