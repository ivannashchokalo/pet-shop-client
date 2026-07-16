import { api, ApiError } from "@/app/api/api";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const searchParams = request.nextUrl.searchParams;

  const page = searchParams.get("page");
  const perPage = searchParams.get("perPage");

  try {
    const { data } = await api.get("/users/favorites/animals", {
      params: {
        page,
        perPage,
      },
      headers: {
        Cookie: cookieStore.toString(),
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

export async function DELETE() {
  const cookieStore = await cookies();
  try {
    const { data } = await api.delete("/users/favorites/animals", {
      headers: {
        Cookie: cookieStore.toString(),
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
