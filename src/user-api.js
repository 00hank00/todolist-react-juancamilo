const getById = async (userName) => {
  const response = await fetch(`https://playground.4geeks.com/todo/users/${userName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};

export default getById;