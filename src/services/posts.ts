import { _get, _post } from "../lib/Await/request";

export const getPosts = () => _get('https://jsonplaceholder.typicode.com/posts');
export const addPost = (data:object) => _post('https://jsonplaceholder.typicode.com/posts',data);