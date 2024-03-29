// fetchData.ts
const fetchData = async () => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();
    return quote;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
