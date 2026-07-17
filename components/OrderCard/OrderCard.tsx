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

  const { _id, status, createdAt, animalId } = request;

  return (
    <li className="relative overflow-hidden bg-[var(--card-background-main)] rounded-[20px] shadow-[0_2px_4px_0_rgba(50,63,80,0.1)] border-x-[0.2px] border-b-[0.2px] border-[var(--border-card-main)] bg-[var(--card-background-main)]">
      <Link href={`/animals/${animalId.type}/${animalId._id}`}>
        <div className="relative h-[273px]">
          <Image
            src={animalId.images[0] || DEFAULT_PET}
            alt={animalId.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative py-5 px-4 md:py-6">
          <h2 className="flex items-center gap-2 mb-2 font-medium text-[20px] text-[var(--text-main)]">
            Order:
            <span>#{_id.slice(0, 7)}</span>
          </h2>
          <p className="mb-1 text-[20px] text-[var(--text-main)] font-medium">
            {animalId.name}
          </p>
          <p className="mb-6 font-normal text-[16px] text-[var(--text-secondary)]">
            {animalId.type}
          </p>
          <p
            className={clsx(
              "absolute top-[22px] right-[16px] rounded-[15px] py-1 px-4",
              "font-medium text-[15px] leading-[1.4] tracking-[0.01em] text-white",
              {
                "bg-[#47b881]": status === "new",
                "bg-[#e3b52a]": status === "contacted",
                "bg-[#ea7b7b]": status === "closed",
              },
            )}
          >
            {status}
          </p>
          <p className="flex items-center gap-2 font-normal text-[16px] text-[#9db4d3]">
            Ordered:
            <span>{new Date(createdAt).toLocaleDateString()}</span>
          </p>
        </div>
      </Link>
      <div className="px-4 pb-5 md:pb-6">
        <Button
          className="p-[10px] w-full"
          variant="secondary"
          disabled={status !== "new" || isDeleting}
          onClick={() => onDelete(_id)}
        >
          Cancel reservation
        </Button>
      </div>
    </li>
  );
}
