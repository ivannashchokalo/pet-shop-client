"use client";

import { DEFAULT_PET } from "@/constants/images";
import { Animal, AnimalId } from "@/types/animal";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface AnimalCardProps {
  animal: Animal;
  isFavorite: boolean;
  isReserved: boolean;
  onFavoriteClick: (animalId: AnimalId) => void;
}

export default function AnimalCard({
  animal,
  isFavorite,
  isReserved,
  onFavoriteClick,
}: AnimalCardProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const from = `${pathname}?${searchParams.toString()}`;

  return (
    <li>
      <Link
        href={`/animals/${animal.type}/${animal._id}?from=${encodeURIComponent(
          from,
        )}`}
      >
        <div>
          <Image
            src={animal.images[0] || DEFAULT_PET}
            alt={`${animal.type} ${animal.name}`}
            width={300}
            height={400}
          />
        </div>

        <div>
          <div>
            <h2>{animal.name}</h2>
            <p>{animal.price && `$${animal.price}`}</p>
          </div>

          <p>{animal.breed}</p>

          <p>
            {animal.sex
              ? animal.sex.charAt(0).toUpperCase() + animal.sex.slice(1)
              : ""}
          </p>

          <p>
            {animal.status.charAt(0).toUpperCase() + animal.status.slice(1)}
          </p>
        </div>
      </Link>

      <button type="button" onClick={() => onFavoriteClick(animal._id)}>
        {isFavorite ? "-" : "+"}
      </button>

      <button
        type="button"
        onClick={() =>
          router.push(
            `/animals/reserve/${animal._id}?from=${encodeURIComponent(from)}`,
          )
        }
        disabled={isReserved}
      >
        {isReserved ? "Reserved" : "Reserve"}
      </button>
    </li>
  );
}
