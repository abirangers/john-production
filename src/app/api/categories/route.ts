import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "src", "data", "categories.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const categories = JSON.parse(fileData);
  return NextResponse.json({ data: categories });
}
