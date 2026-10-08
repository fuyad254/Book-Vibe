import ReadBookButton from '@/component/bookDtails/readBookButton';
import WishListBookButton from '@/component/bookDtails/wishListBookButton';
import { IBook } from '@/type/book.type';
import Image from 'next/image';
import React from 'react';

const getBook = async () => {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVET_BASE_URL}/booksData.json`);
        const data = await response.json();
        return data;
    } catch{
        return [];
    }}


const  BookDtailsPage = async({params}:{
  params: Promise<{ id: string }>
}) => {
  const {id}= await params

  const booksData= await getBook()
  const book = booksData.find((book: IBook) =>
    String(book.bookId) === String(id))

const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <>
    <section className="py-10 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 md:grid-cols-2 md:gap-10 lg:px-0">
        
        {/* Book Image */}
        <div className="flex min-h-112.5 items-center justify-center rounded-xl bg-gray-100 p-8 md:min-h-132.5">
          <Image
            src={image}
            alt={bookName}
            height={0}
            width={400}
            priority
            className="max-h-150 w-auto max-w-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Book Information */}
        <div>
          {/* Book Name */}
          <h1 className="font-serif text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {bookName}
          </h1>

          {/* Author */}
          <p className="mt-3 text-base text-gray-600">
            By :{" "}
            <span className="font-medium text-gray-800">
              {author}
            </span>
          </p>

          {/* Category */}
          <div className="mt-4 border-y border-gray-200 py-3">
            <span className="text-sm font-medium text-gray-700">
              {category}
            </span>
          </div>

          {/* Review */}
          <div className="mt-5 border-b border-gray-200 pb-5">
            <p className="text-sm leading-6 text-gray-500">
              <span className="font-bold text-gray-800">Review : </span>
              {review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 py-5">
            <span className="mr-2 text-sm font-bold text-gray-800">
              Tag
            </span>

            {tags.map((tag:string) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Information */}
          <div className="grid grid-cols-2 gap-y-4 py-5 text-sm">
            <p className="text-gray-500">Number of Pages:</p>
            <p className="font-semibold text-gray-800">
              {totalPages}
            </p>

            <p className="text-gray-500">Publisher:</p>
            <p className="font-semibold text-gray-800">
              {publisher}
            </p>

            <p className="text-gray-500">Year of Publishing:</p>
            <p className="font-semibold text-gray-800">
              {yearOfPublishing}
            </p>

            <p className="text-gray-500">Rating:</p>
            <p className="font-semibold text-gray-800">
              {rating}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <ReadBookButton book={book}/>

            <WishListBookButton book={book}/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BookDtailsPage;