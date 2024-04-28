import "server-only";
import { db } from "~/server/db";
import { fetchUser } from "./fetchUser";


export async function getAllImages() {
  const userId = fetchUser();
  const images = await db.query.images.findMany({
    where: (image, { eq }) => eq(image.userId, userId),
    orderBy: (image, { desc }) => desc(image.createdAt)
  })
  return images;
}
export async function getImage(id: number) {
  const userId = fetchUser();
  const image = await db.query.images.findFirst({
    where: (image, { eq }) => eq(image.id, id) && eq(image.userId, userId)
  })
  if (!image) throw new Error("Image not found");
  return image;
}
