const obj = {
  name: 'Son',
  age: 31,
  alive: true,
  hobby: ['futsal', 'reading a book'],
};

const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false },
];

const json = JSON.stringify(obj);
const parsed = JSON.parse(json);
console.log(typeof json, json);
console.log(typeof parsed, parsed);

const stringifiedTodos = JSON.stringify(todos);
const parsedTodos = JSON.parse(stringifiedTodos);
console.log(typeof stringifiedTodos, stringifiedTodos);
console.log(typeof parsedTodos, parsedTodos);
