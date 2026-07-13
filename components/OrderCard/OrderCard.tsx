import { DEFAULT_PET } from "@/constants/images";
import { Request } from "@/types/request";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import clsx from "clsx";

interface OrderCardProps {
  request: Request;
  onDelete: (id: string) => void;
  isDeletePending: boolean;
  requestToDelete: string | null;
}

export default function OrderCard({
  request,
  onDelete,
  isDeletePending,
  requestToDelete,
}: OrderCardProps) {
  const isDeleting = isDeletePending && requestToDelete === request._id;

  return (
    <li className="relative overflow-hidden rounded-[20px] shadow-[0_2px_4px_0_rgba(50,63,80,0.1)] border-x-[0.2px] border-b-[0.2px] border-[#c7e0f6]">
      <Link href={`/animals/${request.animalId.type}/${request.animalId._id}`}>
        <div className="relative h-[273px]">
          <Image
            src={request.animalId.images[0] || DEFAULT_PET}
            alt={request.animalId.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative py-5 px-4 bg-[#fff] md:py-6">
          <h2
            className={
              "flex items-center gap-2 mb-2 font-medium text-[20px] text-[#0c1118]"
            }
          >
            Order:
            <span>#{request._id.slice(0, 7)}</span>
          </h2>
          <p className={"mb-1 text-[20px] text-[#0c1118] font-medium"}>
            {request.animalId.name}
          </p>
          <p className="mb-6 font-normal text-[16px]">
            {request.animalId.type}
          </p>
          <p
            className={clsx(
              "absolute top-[22px] right-[16px] rounded-[15px] py-1 px-4",
              "font-medium text-[15px] leading-[1.4] tracking-[0.01em] text-white",
              {
                "bg-[#47b881]": request.status === "new",
                "bg-[#e3b52a]": request.status === "contacted",
                "bg-[#ea7b7b]": request.status === "closed",
              },
            )}
          >
            {request.status}
          </p>
          <p className="flex items-center gap-2 font-normal text-[16px] text-[#9db4d3]">
            Ordered:
            <span>{new Date(request.createdAt).toLocaleDateString()}</span>
          </p>
        </div>
      </Link>
      <div className="px-4 pb-5 md:pb-6">
        <Button
          className="p-[10px] w-full font-medium text-[20px] leading-[0.9] text-[#0c1118]"
          variant="secondary"
          disabled={request.status !== "new" || isDeleting}
          onClick={() => onDelete(request._id)}
        >
          Cancel reservation
        </Button>
      </div>
    </li>
  );
}
