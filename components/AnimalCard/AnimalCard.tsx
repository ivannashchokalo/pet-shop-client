"use client";

import { DEFAULT_PET } from "@/constants/images";
import { Animal, AnimalId } from "@/types/animal";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import Icon from "../Icon/Icon";
import clsx from "clsx";
import IconButton from "../IconButton/IconButton";
import { getAge } from "@/utils/date";

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

  const handleReserveClick = () => {
    router.push(
      `/animals/reserve/${animal._id}?from=${encodeURIComponent(from)}`,
    );
  };

  return (
    <li className="relative overflow-hidden rounded-[20px] shadow-[0_2px_4px_0_rgba(50,63,80,0.1)] border-x-[0.2px] border-b-[0.2px] border-[#c7e0f6]">
      <Link
        href={`/animals/${animal.type}/${animal._id}?from=${encodeURIComponent(
          from,
        )}`}
      >
        <div className="relative h-[273px]">
          <Image
            src={animal.images[0] || DEFAULT_PET}
            alt={`${animal.type} ${animal.name}`}
            fill
            className="object-cover"
          />
          <p className="absolute bottom-4 right-4 py-[2px] px-4 bg-[#85a3c9] rounded-5 font-semibold text-[20px] leading-[1.5] text-[#fff]">
            {animal.price && `$${animal.price}`}
          </p>
        </div>

        <div className="py-5 px-4 bg-[#fff] md:py-6">
          <h2
            className={
              "mb-1 font-medium text-[20px] leading-[1.5] text-[#0c1118]"
            }
          >
            {animal.name}
          </h2>
          <p className="mb-4 font-normal text-base leading-6 text-[#0c1118] md:mb-6">
            {animal.breed}
          </p>
          <div className="flex items-center gap-4 md:mb-6">
            <p className="flex items-center gap-2">
              <Icon name="calendar" className="stroke-[#9db4d3] fill-none" />
              <span className="font-medium text-[14px] leading-[1.3] text-[#9db4d3]">
                {getAge(animal.birthDate)}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Icon name="gender" className="stroke-[#9db4d3] fill-none" />
              <span className="font-medium text-[14px] leading-[1.3] text-[#9db4d3]">
                {animal.sex
                  ? animal.sex.charAt(0).toUpperCase() + animal.sex.slice(1)
                  : ""}
              </span>
            </p>
          </div>
          <p
            className={clsx(
              "absolute top-[22px] left-[16px] rounded-[15px] py-1 px-4",
              "font-medium text-[15px] leading-[1.4] tracking-[0.01em] text-white",
              {
                "bg-[#47b881]": animal.status === "available",
                "bg-[#e3b52a]": animal.status === "reserved",
                "bg-[#ea7b7b]": animal.status === "sold",
              },
            )}
          >
            {animal.status.charAt(0).toUpperCase() + animal.status.slice(1)}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-5 md:pb-6">
        <Button
          className="p-[10px] w-full font-medium text-[20px] leading-[0.9] text-[#0c1118]"
          onClick={handleReserveClick}
          disabled={isReserved}
        >
          {isReserved ? "Reserved" : "Reserve"}
        </Button>
      </div>

      <IconButton
        onClick={() => onFavoriteClick(animal._id)}
        className="absolute top-4 right-4 p-2 bg-[#fff] rounded-full hover:bg-[#4d4d4d] focus-visible:bg-[#4d4d4d]"
      >
        <Icon
          name="heart"
          className={clsx(
            "transition-all duration-200 ease-in-out ",
            isFavorite
              ? "stroke-[#aad2f2] fill-[#aad2f2]"
              : "stroke-[#aad2f2] fill-none",
          )}
        />
      </IconButton>
    </li>
  );
}
