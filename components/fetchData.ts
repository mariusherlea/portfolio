// fetchData.ts
const fetchData = async (link: string) => {
  try {
    const response = await fetch(link);
    const quote = await response.json();
    return quote;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
