import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  if (typeof search !== "string" || search.length > 100) {
    return NextResponse.json({ error: "Invalid search parameter" }, { status: 400 });
  }

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
