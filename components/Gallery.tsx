import React from "react";
import BlurImage from "./BlurImage";
import type { Image } from "./BlurImage";

const Gallery = ({ images }: { images: Image[] }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:0x-8">
      <h1 className="m-auto w-fit border-b-2 border-sky-500 text-5xl font-mono text-center mb-12 p-7 text-black font-black">
        Next JS Image Gallery
      </h1>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
