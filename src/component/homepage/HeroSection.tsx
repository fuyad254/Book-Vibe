import React from 'react';
import book from '@/assets/hero_img.jpg'
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div>
            <section className="mx-auto container px-5 pb-8">
      <div className="flex min-h-103.75 items-center justify-between overflow-hidden rounded-2xl bg-[#f3f3f3] px-8 py-12 md:px-16 lg:px-20">

        {/* Left Content */}
        <div className="max-w-140">
          <h1 className="font-serif text-4xl font-bold leading-[1.2] text-[#111] sm:text-5xl lg:text-[44px]">
            Books to freshen up
            <br />
            your bookshelf
          </h1>

          <button className="mt-10 rounded-md bg-[#16c20e] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0eaa08] cursor-pointer">
            View The List
          </button>
        </div>

        {/* Book Image */}
        <div className="hidden shrink-0 md:block">
          <Image
            src={book}
            alt="Book"
            className="w-47.5 ect-contain lg:w-92.5"
          />
        </div>

      </div>
    </section>
        </div>
    );
};

export default HeroSection;