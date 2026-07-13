"use client";

import { AnimalImageSlider } from "@/components/AnimalImageSlider/AnimalImageSlider";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import { DEFAULT_PET } from "@/constants/images";
import { fetchAnimalById } from "@/lib/api/client/animalsClient";
import { getAge } from "@/utils/date";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AnimalDetailsClient() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string[] }>();
  const id = slug[1];

  const { data } = useQuery({
    queryKey: ["animal", id],
    queryFn: () => fetchAnimalById(id),
    refetchOnMount: false,
  });

  const age = getAge(data?.birthDate as string);

  return (
    <div className="flex flex-col gap-6 xl:flex-row xl:items-center">
      {data?.images && data?.images.length > 1 ? (
        <AnimalImageSlider
          images={data.images}
          name={data.name}
          type={data.type}
        />
      ) : (
        <div className="relative w-full h-[240px] rounded-[20px] overflow-hidden md:h-[400px] xl:w-[630px]">
          <Image
            src={data?.images[0] || DEFAULT_PET}
            fill
            alt={`${data?.type} ${data?.name}`}
            className="object-cover"
          />
        </div>
      )}

      <div className="xl:grow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-[32px] text-[#151c26]">
            {data?.name}
          </h2>
          <p className="font-semibold text-[32px] text-[#151c26]">
            ${data?.price}
          </p>
        </div>
        <div className="flex items-center justify-between mb-8 xl:flex-col xl:gap-6">
          <p className="flex items-center gap-2 font-medium text-[16px] text-[#A2A2A2] xl:self-start">
            {data?.breed}
            <span className="block w-[4px] h-[4px] bg-[#a2a2a2] rounded-full"></span>
            {data?.type
              ? data.type.charAt(0).toUpperCase() + data.type.slice(1)
              : ""}
          </p>

          <p
            className={clsx(
              "rounded-[15px] py-1 px-12",
              "font-medium text-[15px] tracking-[0.01em] text-white xl:self-start",
              {
                "bg-[#47b881]": data?.status === "available",
                "bg-[#e3b52a]": data?.status === "reserved",
                "bg-[#ea7b7b]": data?.status === "sold",
              },
            )}
          >
            {data?.status
              ? data.status.charAt(0).toUpperCase() + data.status.slice(1)
              : ""}
          </p>
        </div>
        <ul className="flex flex-col gap-4 mb-8 md:flex-row md:gap-6">
          <li className="w-full p-4 bg-[rgba(199,224,246,0.5)] rounded-[20px]">
            <p className="flex items-center gap-2 mb-4 font-medium text-[20px] text-[#151c26] ">
              <Icon name="calendar" className="fill-none stroke-[#323f50]" />
              Age
            </p>
            <p className="text-[16px] text-[#151c26]">{age}</p>
          </li>
          <li className="w-full p-4 bg-[rgba(199,224,246,0.5)] rounded-[20px]">
            <p className="flex items-center gap-2 mb-4 font-medium text-[20px] text-[#151c26] ">
              <Icon name="gender" className="fill-none stroke-[#323f50]" />
              Gender
            </p>
            <p className="text-[16px] text-[#151c26]">{data?.sex}</p>
          </li>
        </ul>
        <div className="mb-8">
          <h3 className="mb-4 font-semibold text-[24px] text-[#151c26]">
            About {data?.name}
          </h3>
          <p className="text-[#151c26] text-[16px]">{data?.description}</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <Button
            variant="secondary"
            className="p-[10px] w-full"
            onClick={() => router.push(`/animals/reserve/${data?._id}`)}
          >
            <Icon name="heart" className="mr-4 fill-none stroke-[#323f50]" />
            Add to Favorites
          </Button>
          <Button
            className="p-[10px] w-full"
            onClick={() => router.push(`/animals/reserve/${data?._id}`)}
          >
            Reserve now
          </Button>
        </div>
      </div>
    </div>
  );
}
