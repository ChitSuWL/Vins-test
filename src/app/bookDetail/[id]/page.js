import { getAllBooks } from "@/app/lib/book";

export default async function BookDetail(id) {
  const bookId = id.params.id;
  const allBooks = await getAllBooks();
  let selectedBook = null;
  if (allBooks) {
    selectedBook = allBooks.find((book) => book.id === parseInt(bookId));
    if (!selectedBook) {
      console.error(`Book with ID ${bookId} not found`);
      return <div>There is no book with ID {bookId}.</div>;
    }
  } else {
    console.error("Error fetching books");
    return <div>Error fetching books. Please try again later.</div>;
  }

  console.log("selectedBook.image", selectedBook.image);
  return (
    <div className="container mx-auto px-4 py-8">
      {selectedBook ? (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-auto"
            src={selectedBook.image}
            alt={selectedBook.title}

          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{selectedBook.title}</h2>
            <p className="text-gray-700 text-base">
              {selectedBook.description}
            </p>
            <div className="mt-4">
              <p className="font-semibold">Author: {selectedBook.author}</p>
              <p className="font-semibold">Genre: {selectedBook.genre}</p>
              <p className="font-semibold">ISBN: {selectedBook.isbn}</p>
              <p className="font-semibold">
                Published: {selectedBook.published}
              </p>
              <p className="font-semibold">
                Publisher: {selectedBook.publisher}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>There is no book under this selection.</div>
      )}
    </div>
  );
}
