"use client";
import { useEffect, useState } from "react";

export default function BookDetail(id) {
  const bookId = id.params.id;
  console.log(" id bring", bookId);
  const [bookDetail, setBookDetail] = useState([]);
  useEffect(() => {
    getBookDetail();
  }, []);
  async function getBookDetail() {
    try {
      const response = await fetch(`https://fakerapi.it/api/v1/books`);
      console.log("response", response);
      if (response.ok) {
        const responseData = await response.json();
        const book = responseData.data.find(
          (book) => book.id === parseInt(bookId)
        );
        setBookDetail(book);
        console.log("Book detail:", book);
      } else {
        console.log("Error fetching books:", response.statusText);
      }
    } catch (error) {
      console.log("Fetching book detail error:", error);
    }
  }
  return (
    <div className="container mx-auto px-4 py-8">
      {bookDetail ? (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-auto"
            src={bookDetail.image}
            alt={bookDetail.title}
          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{bookDetail.title}</h2>
            <p className="text-gray-700 text-base">{bookDetail.description}</p>
            <div className="mt-4">
              <p className="font-semibold">Author: {bookDetail.author}</p>
              <p className="font-semibold">Genre: {bookDetail.genre}</p>
              <p className="font-semibold">ISBN: {bookDetail.isbn}</p>
              <p className="font-semibold">Published: {bookDetail.published}</p>
              <p className="font-semibold">Publisher: {bookDetail.publisher}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
