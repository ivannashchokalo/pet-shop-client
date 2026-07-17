"use client";

import Icon from "@/components/Icon/Icon";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  page,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      forcePage={page - 1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      previousLabel={
        <Icon
          name="icon-left"
          className="stroke-[var(--icon-color)] fill-none"
        />
      }
      nextLabel={
        <Icon
          name="icon-right"
          className="stroke-[var(--icon-color)] fill-none"
        />
      }
      breakLabel="..."
      renderOnZeroPageCount={null}
      containerClassName="flex items-center gap-2 mx-auto"
      pageClassName="w-8 h-8 bg-[--pagination-bg] border border-[#aad2f2] rounded-[4px] cursor-pointer transition-colors duration-200 hover:border-[var(--text-main)] focus-visible:border-[var(--text-main)]"
      pageLinkClassName="flex items-center justify-center w-full h-full font-bold text-[14px] text-[var(--text-main)]"
      activeClassName="border border-[var(--text-main)]"
      previousClassName="w-8 h-8 flex items-center justify-center border border-[#aad2f2] rounded-[4px] cursor-pointer transition-colors duration-200 hover:border-[var(--text-main)] focus-visible:border-[var(--text-main)]"
      nextClassName="w-8 h-8 flex items-center justify-center border border-[#aad2f2]  rounded-[4px] cursor-pointer transition-colors duration-200 hover:border-[var(--text-main)] focus-visible:border-[var(--text-main)]"
      breakClassName="w-8 h-8 pb-1 border border-[#aad2f2] rounded-[4px] cursor-pointer transition-colors duration-200 hover:border-[var(--text-main)] focus-visible:border-[var(--text-main)]"
      breakLinkClassName="flex items-end justify-center w-full h-full font-bold text-[14px] text-[var(--text-main)]"
      disabledClassName="pointer-events-none bg-[#aad2f2] opacity-30"
    />
  );
}
