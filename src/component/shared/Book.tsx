import React from "react";
import Image from "next/image";
import { IBook } from "@/type/book.type";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const Book = ({ book }: IBookCardProps) => {
  const { bookName, author, image, rating, category, tags = [], bookId } = book;

  return (
    <div className=" rounded-2xl border border-gray-200 bg-white p-6 container mx-auto">
      <div className="relative w-full h-43 rounded-xl bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={bookName}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#f0faf1] px-4 py-2 text-sm font-medium text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Name */}
      <h2 className="mt-5 font-serif text-[25px] font-bold leading-tight text-[#1f1f1f]">
        {bookName}
      </h2>

      {/* Author */}
      <p className="mt-4 text-[15px] text-gray-600">
        By: <span className="font-medium">{author}</span>
      </p>

      {/* Divider */}
      <div className="my-5 border-t border-dashed border-gray-300" />

      {/* Bottom Info */}
      <div className="flex items-center justify-between">
        {/* Category */}
        <span className="text-[15px] font-medium text-gray-600">
          {category}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-medium text-gray-600">
            {rating?.toFixed(2)}
          </span>
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.8"
            className="fill-yellow-400 text-yellow-400"
          >
            <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55-4.76-4.64 6.58-.96L12 2.5Z" />
          </svg>
        </div>
      </div>
      <Link href={`/booklist/${bookId}`}>
        <div className="flex justify-center items-center">
          <button className="rounded-md cursor-pointer bg-[#13c20b] px-50 mt-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0eaa08]">
            View Details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Book;
