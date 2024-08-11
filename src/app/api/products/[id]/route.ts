import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Product } from "@/types/product";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();

  const filePath = path.join(process.cwd(), "src", "data", "products.json");
  if(!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const fileData = fs.readFileSync(filePath, "utf-8");
  let products;
  try {
    products = JSON.parse(fileData);
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON format" }, { status: 500 });
  }

  const productDetail = products.find(
    (product: Product) => product.id === Number(id)
  );

  if (!productDetail) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ data: productDetail });
}
