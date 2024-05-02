
export async function getAllBooks() {
    try {
      const response = await fetch("https://fakerapi.it/api/v1/books");
      if (response.ok) {
        const { data } = await response.json();
        return data;
      } else {
        throw new Error("Failed to fetch books");
      }
    } catch (error) {
      console.error("Fetching error", error);
      return [];
    }
  }
  