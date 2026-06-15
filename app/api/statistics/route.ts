import { NextResponse } from "next/server";
import { api, ApiError } from "../api";

export async function GET() {
  try {
    const { data } = await api.get("/statistics");
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json(
      { error: err.response?.data.message },
      { status: err.status },
    );
  }
}
