"use client";

import { DEFAULT_PET } from "@/constants/images";
import { Animal, AnimalId } from "@/types/animal";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "../../components/Button/Button";
import Icon from "../Icon/Icon";
import clsx from "clsx";
import IconButton from "../IconButton/IconButton";

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

  function getAge(birthDate: string) {
    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();

    if (today.getDate() < birth.getDate()) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years === 0) {
      return `${months} month${months !== 1 ? "s" : ""}`;
    }

    return `${years} year${years !== 1 ? "s" : ""}`;
  }

  const handleReserveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("res");
    e.preventDefault();
    e.stopPropagation();

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
          <p className="absolute bottom-4 right-4 py-[2px] px-4 bg-[#85a3c9] rounded-[20px] font-semibold text-[20px] leading-[1.5] text-[#fff]">
            {animal.price && `$${animal.price}`}
          </p>
        </div>

        <div className="py-[20px] px-[16px] bg-[#fff]">
          <h2
            className={
              "mb-1 font-medium text-[20px] leading-[1.5] text-[#0c1118]"
            }
          >
            {animal.name}
          </h2>
          <p className="mb-4 font-normal text-base leading-6 text-[#0c1118]">
            {animal.breed}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <p className="flex items-center gap-2">
              <Icon name="calendar" className="stroke-[#9db4d3] fill-none" />
              <span className="font-medium text-[14px] leading-[1.3] text-[#9db4d3]">
                {getAge(animal.birthDate)}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Icon name="gender" className="stroke-[#9db4d3] fill-none" />
              <span className="font-medium text-[14px] leading-[1.3] text-[#9db4d3]">
                {" "}
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
          <Button
            className="p-[10px] w-full font-medium text-[20px] leading-[0.9] text-[#0c1118]"
            onClick={handleReserveClick}
            disabled={isReserved}
          >
            {isReserved ? "Reserved" : "Reserve"}
          </Button>
        </div>
      </Link>
      <IconButton
        onClick={() => onFavoriteClick(animal._id)}
        className="absolute top-4 right-4 p-2 bg-[#fff] rounded-full"
      >
        <Icon
          name="heart"
          className={clsx(
            "transition-all duration-300 ease-in-out",
            isFavorite
              ? "stroke-[#aad2f2] fill-[#aad2f2]"
              : "stroke-[#aad2f2] fill-none",
          )}
        />
      </IconButton>
    </li>
  );
}
