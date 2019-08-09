import axios from 'axios';

const getTodo = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(result => result)
    .catch(error => console.log(error));

export default getTodo;