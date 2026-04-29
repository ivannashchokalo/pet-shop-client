import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../../api";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const data = await api.post("/auth/request-reset-email", body);
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json(
      { error: err.response?.data.message },
      { status: err.status },
    );
  }
}
