import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { deleteImage, getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

async function Gallery() {
  const Images = await getMyImages();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 w-full md:w-2/3 p-4 h-full">
      {Images.map((image, index) => (
        <div
          key={image.id}
          className={`relative ${index % 3 === 1 ? "row-span-2" : ""} group`}
        >
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={`Image ${image.name}`}
              className="object-cover w-full h-full rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </Link>
          <form action={async ()=>{
            "use server"
            await deleteImage(image.id);
          }}>
            <button
            className="absolute top-2 right-2 bg-gray-400/30 border-black text-white px-2 py-1 rounded opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"

            >
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="text-white h-screen flex justify-center ">
      <SignedOut>
        <div className="text-xl font-semibold text-center h-screen pt-10">
          Please Sign In above
        </div>
      </SignedOut>
      <SignedIn>
        <Gallery />
      </SignedIn>
    </main>
  );
}
