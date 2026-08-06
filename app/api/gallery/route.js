import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression("public_id:gallery-*")
      .max_results(100)
      .execute();

    const images = result.resources.map((image) => ({
      id: image.asset_id,
      public_id: image.public_id,

      heroUrl: cloudinary.url(image.public_id, {
        fetch_format: "auto",
        quality: "auto",
        crop: "fill",
        width: 1600,
      }),

      cardUrl: cloudinary.url(image.public_id, {
        fetch_format: "auto",
        quality: "auto",
        crop: "fill",
        width: 700,
      }),

      width: image.width,
      height: image.height,
      format: image.format,
    }));

    // Sort by the gallery number (gallery-005 > gallery-004 > gallery-003...)
    images.sort((a, b) => {
      const getNumber = (publicId) => {
        const match = publicId.match(/gallery-(\d+)/i);
        return match ? parseInt(match[1], 10) : 0;
      };

      return getNumber(b.public_id) - getNumber(a.public_id);
    });

    return NextResponse.json(images);
  } catch (error) {
    console.error("Gallery API Error:", error);

    return NextResponse.json(
      { error: "Failed to load gallery images." },
      { status: 500 }
    );
  }
}