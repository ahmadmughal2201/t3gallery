import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/7129a86a-1453-425f-bb45-56b02f73e643-1i.jpg",
  "https://utfs.io/f/89404a8a-692a-4ab6-8da7-4cebd1c767da-1h.jpg",
  "https://utfs.io/f/0667fcae-3f18-49d0-bfa3-bc16185fd98b-1g.jpg",
  "https://utfs.io/f/ffa05493-beb6-4240-b2eb-4279065de9ef-1f.jpg",
  "https://utfs.io/f/a8d583cc-065d-4292-a0c0-5b12ae69b185-1e.jpg",
  "https://utfs.io/f/3ee5f00b-c836-4cee-ab12-0fdcf9110964-1d.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white h-full flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 w-2/3 p-4">
        {[...mockImages,...mockImages,...mockImages].map((image, index) => (
          <div
            key={image.id + "-" + index}
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
    </main>
  );
}
