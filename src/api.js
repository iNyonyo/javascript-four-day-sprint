export async function loadSuggestions() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    return data.map(item => ({
      id: item.id,
      title: item.title,
      completed: item.completed
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
