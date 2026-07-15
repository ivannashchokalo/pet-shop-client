"use client";
import AnimalsList from "@/components/AnimalsList/AnimalsList";
import { fetchAnimals } from "@/lib/api/client/animalsClient";
import { useQuery } from "@tanstack/react-query";
import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";
import ReactPaginate from "react-paginate";

export default function AnimalsByCategoryClient() {
  const searchParams = useSearchParams();
  const { slug } = useParams<{ slug: string[] }>();
  const router = useRouter();
  const pathname = usePathname();
  const type = slug[0];
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const breed = searchParams.get("breed") || "";
  const sex = searchParams.get("sex") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const sortOrder = searchParams.get("sortOrder") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const { data } = useQuery({
    queryKey: [
      "animals",
      { page, type, breed, sex, sortBy, sortOrder, search, minPrice, maxPrice },
    ],
    queryFn: () =>
      fetchAnimals(
        page,
        type,
        breed,
        sex,
        sortBy,
        sortOrder,
        search,
        minPrice,
        maxPrice,
      ),
    refetchOnMount: false,
  });

  const handlePageChange = ({ selected }: { selected: number }) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(selected + 1));

    router.push(`${pathname}?${params.toString()}`);
  };

  const animals = data?.animals ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <>
      {animals.length > 0 && <AnimalsList animals={animals} />}
      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={page - 1}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          previousLabel="<-"
          nextLabel="->"
          breakLabel="..."
          renderOnZeroPageCount={null}
          // containerClassName={styles.pagination}
          // activeClassName={styles.active}
          // disabledClassName={styles.disabled}
        />
      )}
    </>
  );
}
