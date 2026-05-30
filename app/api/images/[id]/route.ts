import { NextResponse } from "next/server";
import { getImageById } from "@/lib/db";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const imageId = params.id;
  if (!imageId) {
    return new NextResponse("Image ID is required", { status: 400 });
  }

  const image = await getImageById(imageId);
  if (!image || !image.data) {
    return new NextResponse("Image not found", { status: 404 });
  }

  const rawData: any = image.data;
  const body = Buffer.isBuffer(rawData) ? rawData : Buffer.from(rawData?.buffer ?? rawData);
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": image.contentType ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
