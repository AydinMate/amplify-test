import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function GET(
  req: Request,
) {
  try {

    const products = await prismadb.product.findMany({
      where: {
        storeId: "319e42e8-2651-480f-85ff-3ed22b05ab09",
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
