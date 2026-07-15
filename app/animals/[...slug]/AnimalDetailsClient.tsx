"use client";

import { AnimalImageSlider } from "@/components/AnimalImageSlider/AnimalImageSlider";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import SignInForm from "@/components/SignInForm/SignInForm";
import { DEFAULT_PET } from "@/constants/images";
import useFavorites from "@/hooks/useFavorites";
import { fetchAnimalById } from "@/lib/api/client/animalsClient";
import { getAge } from "@/utils/date";
import capitalizeFirstLetter from "@/utils/text";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import { useAuthStore } from "@/lib/stores/authStore";
import { fetchUserRequests } from "@/lib/api/client/requestsClient";

export default function AnimalDetailsClient() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string[] }>();
  const id = slug[1];
  const user = useAuthStore((state) => state.user);

  const { handleFavoriteClick, isLoginModalOpen, setIsLoginModalOpen } =
    useFavorites();

  const { data: animal } = useQuery({
    queryKey: ["animal", id],
    queryFn: () => fetchAnimalById(id),
    refetchOnMount: false,
  });

  const { data: userRequests } = useQuery({
    queryKey: ["user-requests"],
    queryFn: fetchUserRequests,
  });

  const age = animal?.birthDate ? getAge(animal.birthDate) : "";
  const images = animal?.images ?? [];
  const isFavorite = user?.favorites.includes(id) ?? false;
  const isReserved =
    userRequests?.some((request) => request.animalId._id === id) ?? false;

  const infoCardClass = "w-full rounded-[20px] bg-[#c7e0f6]/50 p-4";
  const infoTitleClass =
    "flex items-center gap-2 mb-4 font-medium text-[20px] text-[#151c26]";
  const infoTextClass = "text-[16px] text-[#151c26]";

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:gap-12">
        {animal && images.length > 1 ? (
          <AnimalImageSlider
            images={images}
            name={animal.name}
            type={animal.type}
          />
        ) : (
          <div className="relative w-full h-[240px] rounded-[20px] overflow-hidden md:h-[400px] xl:w-[630px]">
            <Image
              src={images[0] || DEFAULT_PET}
              fill
              alt={`${animal?.type} ${animal?.name}`}
              className="object-cover"
            />
          </div>
        )}

        <div className="xl:grow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-[32px] text-[#151c26]">
              {animal?.name}
            </h2>
            <p className="font-semibold text-[32px] text-[#151c26]">
              ${animal?.price}
            </p>
          </div>
          <div className="flex items-center justify-between mb-8 xl:flex-col xl:gap-6">
            <p className="flex items-center gap-2 font-medium text-[16px] text-[#A2A2A2] xl:self-start">
              {animal?.breed}
              <span className="block w-[4px] h-[4px] bg-[#a2a2a2] rounded-full"></span>
              {animal?.type && capitalizeFirstLetter(animal.type)}
            </p>

            <p
              className={clsx(
                "rounded-[15px] py-1 px-12 font-medium text-[15px] tracking-[0.01em] text-white xl:self-start",
                {
                  "bg-[#47b881]": animal?.status === "available",
                  "bg-[#e3b52a]": animal?.status === "reserved",
                  "bg-[#ea7b7b]": animal?.status === "sold",
                },
              )}
            >
              {animal?.status && capitalizeFirstLetter(animal.status)}
            </p>
          </div>
          <ul className="flex flex-col gap-4 mb-8 md:flex-row md:gap-6">
            <li className={infoCardClass}>
              <h3 className={infoTitleClass}>
                <Icon name="calendar" className="fill-none stroke-[#323f50]" />
                Age
              </h3>
              <p className={infoTextClass}>{age}</p>
            </li>
            <li className={infoCardClass}>
              <h3 className={infoTitleClass}>
                <Icon name="gender" className="fill-none stroke-[#323f50]" />
                Gender
              </h3>
              <p className={infoTextClass}>{animal?.sex}</p>
            </li>
          </ul>
          <div className="mb-8">
            <h3 className="mb-4 font-semibold text-[24px] text-[#151c26]">
              About {animal?.name}
            </h3>
            <p className={infoTextClass}>{animal?.description}</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button
              variant="secondary"
              className="w-full p-[10px]"
              onClick={() => handleFavoriteClick(id)}
            >
              <Icon
                name="heart"
                className={clsx(
                  "mr-4 transition-all duration-200",
                  isFavorite
                    ? "fill-[#323f50] stroke-[#323f50]"
                    : "fill-none stroke-[#323f50]",
                )}
              />
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </Button>
            <Button
              className="w-full p-[10px]"
              onClick={() => router.push(`/animals/reserve/${id}`)}
              disabled={isReserved}
            >
              {isReserved ? "Reserved" : "Reserve"}
            </Button>
          </div>
        </div>
      </div>
      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <SignInForm onModalClose={() => setIsLoginModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
