import AnimalReservationForm from "@/components/AnimalReservationForm/AnimalReservationForm";
import ContentCard from "@/components/ContentCard/ContentCard";

interface AnimalReservationPageProps {
  params: Promise<{ id: string }>;
}

export default async function AnimalReservationPage({
  params,
}: AnimalReservationPageProps) {
  const { id } = await params;
  return (
    <>
      <h1 className="sr-only">Pet Reservation</h1>
      <ContentCard>
        <AnimalReservationForm animalId={id} />
      </ContentCard>
    </>
  );
}
