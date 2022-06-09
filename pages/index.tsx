import Head from "next/head";
// import { generateUsers } from "../seeds";
import { NextPage } from "next";
import Gallery from "../components/Gallery";
import type { Image } from "../components/BlurImage";
import { createClient } from "@supabase/supabase-js";

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABAE_SERVICE_ROLE_KEY || ""
  );
  // await supabaseAdmin.from("images").insert(generateUsers());

  const { data } = await supabaseAdmin.from("images").select("*").order("id");
  return {
    props: {
      images: data,
    },
  };
}

const index: NextPage<{ images: Image[] }> = ({ images }) => {
  return (
    <>
      <Head>
        <title>Image Gallery </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Gallery images={images} />
    </>
  );
};

export default index;
