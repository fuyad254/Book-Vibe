"use client";
import SelectedBooksCardComponent from "@/component/shared/selectedBooksCard";
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/type/book.type";
import React, { useContext } from "react";

const SelectedBooksCard = SelectedBooksCardComponent as React.ComponentType<{
  book: IBook;
}>;

const SelectedBooks = () => {
  const BookProvider = useContext(BooksContext);
  const { readBook, wishlist } = BookProvider as {
    readBook: IBook[];
    wishlist: IBook[];
  };

  return (
    <>
      <div className="container mx-auto bg-gray-100 rounded-2xl px-7 py-7">
        <h2 className="text-center text-5xl text-black font-bold ">Books</h2>
      </div>

      <div className="tabs tabs-lift container mx-auto mt-6">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBook.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
            {readBook.map((book: IBook) => (
            <SelectedBooksCard key={book.bookId} book={book} />
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wish List (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishlist.map((book: IBook) => (
            <SelectedBooksCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectedBooks;
