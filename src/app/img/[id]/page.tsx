import { getImage } from "~/utils/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  const image = await getImage(photoId);
  return <div >{image?.name}</div>
}
