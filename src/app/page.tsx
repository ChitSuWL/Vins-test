import { getAllBooks } from "../app/lib/book";

export default async function Home() {
  const allBooks = await getAllBooks();
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   getAllBooks();
  // }, []);

  // async function getAllBooks() {
  //   try {
  //     const response = await fetch("https://fakerapi.it/api/v1/books");
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       console.log("responseData", data);
  //       setAllBooks(data);
  //     }
  //   } catch (error) {
  //     console.log("fetching error", error);
  //   }
  // }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-yellow-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Genre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Published
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Publisher
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              ISBN
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allBooks.map((book) => (
            <tr key={book.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href={`/bookDetail/${book.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {book.id}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.genre}</td>
              <td className="px-6 py-4 whitespace-nowrap max-w-[200px] truncate">
                {book.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{book.published}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.publisher}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

