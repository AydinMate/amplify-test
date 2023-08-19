import { NextResponse } from "next/server";

export async function GET(
    req: Request,
  ) {
    try {
   
  const productHires = {
    name: "Aydin",
    status: "working",
    hello: "world"
  }
  
      
      // Create a new response with the productHires data
      const res = NextResponse.json(productHires);
  
      // Add the CORS headers to the response
      res.headers.set(
        "Access-Control-Allow-Origin",
        process.env.FRONTEND_STORE_URL!
      );
      res.headers.set("Access-Control-Allow-Methods", "GET,POST");
      res.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
  
      return res;
    } catch (error) {
      console.log("[PRODUCT_HIRES_GET]", error);
      return new NextResponse("Internal error", { status: 500 });
    }
  }