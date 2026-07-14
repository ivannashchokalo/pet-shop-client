"use client";

import { fetchAnimalById } from "@/lib/api/client/animalsClient";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Breadcrumbs() {
  const { slug } = useParams<{ slug?: string[] }>();

  const category = slug?.[0];
  const id = slug?.[1];

  const { data: animal } = useQuery({
    queryKey: ["animal", id],
    queryFn: () => fetchAnimalById(id!),
    enabled: !!id,
  });

  if (!slug || !category) return null;

  const categoryName = `${category.charAt(0).toUpperCase() + category.slice(1)}s`;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2">
      <Link
        href="/animals"
        className="text-[16px] tracking-[-0.02em] text-center text-[#85a3c9]"
      >
        Animals
      </Link>

      <span className="text-[16px] text-[#85a3c9]">/</span>

      {slug.length === 2 ? (
        <>
          <Link
            href={`/animals/${category}`}
            className="text-[16px] text-[#85a3c9]"
          >
            {categoryName}
          </Link>
          <span className="text-[16px] text-[#85a3c9]">/</span>
          <span className="text-[#323f50]">{animal?.name}</span>
        </>
      ) : (
        <span className="font-medium text-4 tracking-[-0.02em] text-center text-[#85a3c9]">
          {categoryName}
        </span>
      )}
    </nav>
  );
}
