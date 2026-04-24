import AnimalReservationForm from "@/components/AnimalReservationForm/AnimalReservationForm";

interface AnimalReservationPageProps {
  params: Promise<{ id: string }>;
}

export default async function AnimalReservationPage({
  params,
}: AnimalReservationPageProps) {
  const { id } = await params;
  return (
    <>
      <p>AnimalReservationPage</p>
      <AnimalReservationForm animalId={id} />
    </>
  );
}
