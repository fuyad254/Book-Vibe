'use client'
import { BooksContext } from '@/context/BookContext';
import { IBook } from '@/type/book.type';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const WishListBookButton = ({book}:{book : IBook}) => {

    const {wishlist, setWishlist}= useContext(BooksContext) as {
            wishlist: IBook[];
            setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
    }

        const handleWishlistBotton =()=>{
        setWishlist([...wishlist, book])
        
            toast.success(`You have added "${book.bookName}" on your wishlist`, {
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
        
    }

    return (
        <button
              type="button"
              className="rounded-md cursor-pointer bg-cyan-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-cyan-600" onClick={handleWishlistBotton}
            >
              Wishlist
            </button>
    );
};

export default WishListBookButton;