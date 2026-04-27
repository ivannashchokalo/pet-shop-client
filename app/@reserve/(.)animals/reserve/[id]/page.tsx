import AnimalReservationForm from "@/components/AnimalReservationForm/AnimalReservationForm";
import Modal from "@/components/Modal/Modal";

interface ReserveModalProps {
  params: Promise<{ id: string }>;
}
export default async function ReserveModal({ params }: ReserveModalProps) {
  const { id } = await params;
  return (
    <Modal>
      <AnimalReservationForm animalId={id} />
    </Modal>
  );
}
