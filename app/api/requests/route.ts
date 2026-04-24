import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../api";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { data } = await api.post("/requests", body);
    console.log("next", data);
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json(
      { error: err.response?.data.message ?? err.message },
      { status: err.status },
    );
  }
}
