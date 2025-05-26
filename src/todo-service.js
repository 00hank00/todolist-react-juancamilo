import userApi from './user-api.js';

const userName = 'pepito';

const getTodolist = async () => {
  const { todos } = await userApi.getById(userName);
  return todos;
};

export default { getTodolist };