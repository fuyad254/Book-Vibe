import React from 'react';

import { IBook } from '@/type/book.type';
import Book from '@/component/shared/Book';


const getBook = async () => {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVET_BASE_URL}/booksData.json`);
        const data = await response.json();
        return data;
    } catch{
        return [];
    }
};

const BookSection = async () => {
    const Booksdata = await getBook();

    return (
       <>
        <h1 className='text-red-400 font-bold text-center my-15 text-6xl'>Our Colection</h1>
        <div className='grid grid-cols-3 gap-3 container mx-auto'>
            {Booksdata.map((book:IBook,ind:number) => (
                
            <Book key={ind} book={book}/>
             
             
            
))}
        </div>
        </>
    );
};

export default BookSection;