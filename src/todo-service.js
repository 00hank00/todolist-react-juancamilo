import userApi from './user-api.js'

const USERNAME = 'pepito';

const getTodoList = async () => {
  const { todos } = await userApi.getById(USERNAME);
  return todos;
};

export default { getTodoList };