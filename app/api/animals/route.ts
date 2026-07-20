import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../api";

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get("page");
  const type = req.nextUrl.searchParams.get("type");
  const breed = req.nextUrl.searchParams.get("breed");
  const sex = req.nextUrl.searchParams.get("sex");
  const sortBy = req.nextUrl.searchParams.get("sortBy");
  const sortOrder = req.nextUrl.searchParams.get("sortOrder");
  const minPrice = req.nextUrl.searchParams.get("minPrice");
  const maxPrice = req.nextUrl.searchParams.get("maxPrice");
  const search = req.nextUrl.searchParams.get("search");

  try {
    const { data } = await api.get("/animals", {
      params: {
        page,
        type,
        breed,
        sex,
        sortBy,
        sortOrder,
        search,
        minPrice,
        maxPrice,
        perPage: 9,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json(
      { error: err.response?.data.message },
      { status: err.status },
    );
  }
}
