import React from 'react';
import Image from 'next/image';

import bannerImg from '@/Assets/image/bg4.jpg';

export const Banner = () => {
  return (
    <section className="relative w-full h-[90vh] my-10">
      <Image
        src={bannerImg}
        alt="Gluten Free Recipes Banner"
        fill
        priority
        className="object-cover w-full h-full"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 md:px-20">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 hover:text-green-400 transition-all duration-300">
            Gluten Free Recipes
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-8">
            Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan
            molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel
            aliquam congue, risus leo elementum nibh.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition-all duration-300">
            Discover all the recipes
          </button>
        </div>
      </div>
    </section>
  );
};
