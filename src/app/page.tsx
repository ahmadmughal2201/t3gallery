import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";

async function Gallery() {
  const Images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 w-2/3 p-4">
      {Images.map((image, index) => (
        <div
          key={image.id}
          className={`relative ${index % 3 === 1 ? "row-span-2" : ""}`}
        >
          <Link href={`/`}>
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );

}

export default async function HomePage() {
  return (
    <main className="text-white h-full flex justify-center">
      <SignedOut>
        <div className="text-xl font-semibold text-center h-screen pt-10">Please Sign In above</div>
      </SignedOut>
      <SignedIn>
        <Gallery />
      </SignedIn>
    </main>
  );
}
