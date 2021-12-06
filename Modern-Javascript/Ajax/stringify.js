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
console.log(typeof json, json);

const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

function filter(key, value) {
  return typeof value === 'number' ? undefined : value;
}

const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);

const stringifiedTodos = JSON.stringify(todos, null, 2);
console.log(typeof stringifiedTodos, stringifiedTodos);
