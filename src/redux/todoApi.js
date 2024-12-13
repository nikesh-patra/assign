export const fetchTodosApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    return await response.json();
  };
  