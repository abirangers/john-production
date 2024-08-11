import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  const filePath = path.join(process.cwd(), "src", "data", "products.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  
  const products = JSON.parse(fileData);

  const filteredProducts = products.filter((product: any) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;
    return matchesSearch && matchesCategory;
  });

  return NextResponse.json({ data: filteredProducts });
}
