const generateRandomNames = () => {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const imageLinks = [
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFKDhLOaWUAksm0e%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFI9_LDSXEAEE2SH%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFJiYEN_VgAMGD3B%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFI6V1jkXEAkZ0TJ%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFIvgL9_XoAQSJLf%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFIm3t4DVkAMFBLh%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFHJ3S4AWUAkGjoI%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFHUIyO6UUAAW7py%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFIAQjfKXoAAdezN%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FE-Ir6sRXsAEROZw%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFH3qTGsXoAIAMTy%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFH4WDFWXEAMxLTR%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFH8IfE8XoB0GJ1J%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFHr80WWWUAIK3xS%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEsE_yeGXcAEhXus%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFF3G6LVWUAYIrzI%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEw7OeHqUcAIh2o-%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFFNyYEAXsAMdOhV%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEpIR281XIAMUrEM%3Fformat%3Djpg&w=1920&q=75",
  "https://swag.vercel.app/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFH80ef6WUAsYNnO%3Fformat%3Djpg&w=1920&q=75",
];

export const generateUsers = () => {
  const users = [];
  for (let i = 0; i < 20; i++) {
    users.push({
      name: generateRandomNames(),
      username: `@${generateRandomNames()}`,
      href: imageLinks[i],
      imageSrc: imageLinks[i],
    });
  }
  return users;
};
