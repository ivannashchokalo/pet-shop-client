import { Request } from "@/types/request";
import OrderCard from "../OrderCard/OrderCard";

interface OrdersListProps {
  requests: Request[];
  onDelete: (id: string) => void;
  isPending: boolean;
  requestToDelete: string | null;
}

export default function OrdersList({
  requests,
  onDelete,
  isPending,
  requestToDelete,
}: OrdersListProps) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {requests.map((request) => (
        <OrderCard
          key={request._id}
          request={request}
          onDelete={onDelete}
          isDeletePending={isPending}
          requestToDelete={requestToDelete}
        />
      ))}
    </ul>
  );
}
