import { IBook } from "@/type/book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const MapMarkerIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const UserIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const FileIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6M8 13h8M8 17h5" />
  </svg>
);

const SelectedBooksCard = ({ book }: { book: IBook }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 flex gap-5 mb-4 bg-white">
      {/* Book Image */}
      <div className="w-43.75 h-43 shrink-0 bg-gray-100 rounded-xl flex items-center justify-center p-4">
        <Image
          src={book.image}
          alt={book.bookName}
          height={100}
          width={500}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Book Information */}
      <div className="flex-1">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-700 mb-3">By : {book.author}</p>

        {/* Tags + Year */}
        <div className="flex items-center gap-3 flex-wrap mb-3">
          <span className="font-semibold text-sm">Tag</span>

          {book.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}

          <span className="flex items-center gap-2 text-sm text-gray-600 ml-2">
            <MapMarkerIcon className="w-4 h-4" />
            Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        {/* Publisher + Pages */}
        <div className="flex items-center gap-5 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            Publisher: {book.publisher}
          </span>

          <span className="flex items-center gap-2">
            <FileIcon className="w-4 h-4" />
            Page {book.totalPages}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-3"></div>

        {/* Bottom Info */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-sm">
            Category: {book.category}
          </span>

          <span className="bg-orange-50 text-orange-500 px-4 py-2 rounded-full text-sm">
            Rating: {book.rating}
          </span>
          <Link href={`booklist/${book.bookId}`}><button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition">
            View Details
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default SelectedBooksCard;
