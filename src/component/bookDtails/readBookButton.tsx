"use client";

import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/type/book.type";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const ReadBookButton = ({ book }: { book: IBook }) => {
  const BookProvider = useContext(BooksContext) as {
    readBook: IBook[];
    setReadBook: React.Dispatch<React.SetStateAction<IBook[]>>;
  };
  const { readBook, setReadBook } = BookProvider;

  const handaleReadBook = () => {
    setReadBook([...readBook, book]);
    toast.success(`You have read: "${book.bookName}"`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  };

  return (
    <button
      type="button"
      className="rounded-md cursor-pointer border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
      onClick={handaleReadBook}
    >
      Read
    </button>
  );
};

export default ReadBookButton;
