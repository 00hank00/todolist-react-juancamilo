import userApi from './user-api.js'

const USERNAME = 'juanca';

const getTodoList = async () => {
  const { todos } = await userApi.getById(USERNAME);
  return todos;
};

export default { getTodoList };
