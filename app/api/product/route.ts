import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function GET(
  req: Request,
) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;
    const sizeId = searchParams.get("sizeId") || undefined;
    const colourId = searchParams.get("colourId") || undefined;
    const isFeatured = searchParams.get("isFeatured");



    const products = await prismadb.product.findMany({
      where: {
        storeId: "319e42e8-2651-480f-85ff-3ed22b05ab09",
        categoryId,
        colourId,
        sizeId,
        isFeatured: isFeatured ? true : undefined,
        isArchived: false,
      },
      include: {
        images: true,
        category: true,
        colour: true,
        size: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log("[PRODUCTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
