import axios from 'axios';

export const getPost = async (id: number) => {
  const response = await axios.get<PostData>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
}
export const getUsers = async () => {
  const response = await axios.get<UsersData[]>(`https://jsonplaceholder.typicode.com/users`);
  return response.data;
}
export type PostData = {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}

export type UsersData = {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  {};
  phone:    string;
  website:  string;
  company:  {};
}
