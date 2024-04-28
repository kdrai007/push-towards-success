import { db } from "~/server/db";
import { fetchUser } from "../utils/fetchUser";
// import Image from "next/image";
import Link from "next/link";
import { getAllImages } from "~/utils/queries";

export default async function HomePage() {

  const user = fetchUser();
  if (!user) {
    return (
      <main>
        <h1>Please login</h1>
      </main>
    )
  }
  const galleryImages = await getAllImages();
  return (
    <main className="h-full py-4">
      <div className="grid justify-center grid-cols-8 gap-y-20 px-8 ">
        {
          galleryImages.map((image) => (
            <div key={image.id} className="flex  flex-col gap-2 w-48 h-48">
              <Link href={`/img/${image.id}`}>
                <img alt={image.name} src={image.url} className="h-[200px] w-[200px] object-cover" />
                <p>{image?.name}</p>
              </Link>
            </div>
          ))
        }
      </div>
    </main>
  );
}
