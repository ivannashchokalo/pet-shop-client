import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../../api";

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type");

  try {
    const { data } = await api.get("/animals/filters", {
      params: {
        type,
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
