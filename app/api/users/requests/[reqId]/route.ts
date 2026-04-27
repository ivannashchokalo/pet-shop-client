import { api, ApiError } from "@/app/api/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface Props {
  params: Promise<{
    reqId: string;
  }>;
}

export async function DELETE(request: Request, { params }: Props) {
  const { reqId } = await params;
  const cookieStore = await cookies();

  try {
    const { data } = await api.delete(`/users/requests/${reqId}`, {
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
