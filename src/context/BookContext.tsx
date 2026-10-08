'use client'
import React, { createContext, useState } from 'react';


export const BooksContext= createContext({})



const BookProvider = ({children}:{children:React.ReactNode}) => {
    const [readBook, setReadBook]= useState([])
    const [wishlist, setWishlist]= useState([])

    const shereState= {
        readBook,
        setReadBook,
        wishlist,
        setWishlist
    }

    return (
    <BooksContext.Provider value={shereState}>{children}</BooksContext.Provider>
)
        
};


export default BookProvider;