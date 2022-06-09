import { useState } from "react";
import Image from "next/image";

export type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
};

const BlurImage: React.FC<{ image: Image }> = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imageLoadingComplete = () => setIsLoading(false);
  return (
    <a href={image.href} target="_blank" className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={image.imageSrc}
          className={`group-hover:opacity-75 duration-700 ease-in-out ${
            isLoading
              ? "grayscale backdrop-blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          }`}
          layout="fill"
          objectFit="cover"
          onLoadingComplete={imageLoadingComplete}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{`${image.username}`}</p>
    </a>
  );
};

export default BlurImage;
