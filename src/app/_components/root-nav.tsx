'use client';

import { useRouter } from "next/navigation";
import { UploadButton } from "../../utils/uploadthing";
import Link from "next/link";

export function RootNav() {
  const router = useRouter();
  return <nav className="flex justify-between items-center p-4 border-b border-white">
    <Link href="/">
      <h2 className="font-bold text-2xl">Theo-Gallery</h2>
    </Link>
    <UploadButton endpoint="imageUploader" onClientUploadComplete={() => router.refresh()} />
  </nav>
}
