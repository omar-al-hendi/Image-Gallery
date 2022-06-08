import Image from "next/image";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// const generateRandomNames = () => {
//   let result = "";
//   const characters = "abcdefghijklmnopqrstuvwxyz";
//   const charactersLength = characters.length;
//   for (let i = 0; i < 6; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// };

// const imageLinks = [
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFKDhLOaWUAksm0e%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFI9_LDSXEAEE2SH%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFJiYEN_VgAMGD3B%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFI6V1jkXEAkZ0TJ%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFIvgL9_XoAQSJLf%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFIm3t4DVkAMFBLh%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFHJ3S4AWUAkGjoI%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFHUIyO6UUAAW7py%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFIAQjfKXoAAdezN%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FE-Ir6sRXsAEROZw%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFH3qTGsXoAIAMTy%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFH4WDFWXEAMxLTR%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFH8IfE8XoB0GJ1J%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFHr80WWWUAIK3xS%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEsE_yeGXcAEhXus%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFF3G6LVWUAYIrzI%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEw7OeHqUcAIh2o-%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFFNyYEAXsAMdOhV%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEpIR281XIAMUrEM%3Fformat%3Djpg&w=1920&q=75",
//   "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFH80ef6WUAsYNnO%3Fformat%3Djpg&w=1920&q=75",
// ];

// const generateRandomUsers = () => {
//   const users = [];
//   for (let i = 0; i < 20; i++) {
//     users.push({
//       name: generateRandomNames(),
//       username: `@${generateRandomNames()}`,
//       href: imageLinks[i],
//       imageSrc: imageLinks[i],
//     });
//   }
//   return users;
// };

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABAE_SERVICE_ROLE_KEY || ""
  );

  // await supabaseAdmin.from("images").insert(generateRandomUsers());

  const { data } = await supabaseAdmin.from("images").select("*").order("id");
  return {
    props: {
      images: data,
    },
  };
}

type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
};

export default function Gallery({ images }: { images: Image[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:0x-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

const BlurImage = ({ image }: { image: Image }) => {
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
