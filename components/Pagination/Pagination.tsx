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
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      forcePage={page - 1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      previousLabel={
        <Icon name="icon-left" className="stroke-current fill-none" />
      }
      nextLabel={
        <Icon name="icon-right" className="stroke-current fill-none" />
      }
      breakLabel="..."
      renderOnZeroPageCount={null}
      containerClassName="flex items-center gap-2 mx-auto"
      pageClassName="w-8 h-8 border border-[#aad2f2] rounded-[4px] cursor-pointer transition-colors duration-200 hover:border-[#151c26] focus-visible:border-[#151c26]"
      pageLinkClassName="flex items-center justify-center w-full h-full font-bold text-[14px] text-[#151c26]"
      activeClassName="border border-[#151c26]"
      previousClassName="w-8 h-8 flex items-center justify-center border border-[#aad2f2] bg-[white] rounded-[4px] cursor-pointer transition-colors duration-200 hover:border-[#151c26] focus-visible:border-[#151c26]"
      nextClassName="w-8 h-8 flex items-center justify-center border border-[#aad2f2] bg-[white] rounded-[4px] cursor-pointer transition-colors duration-200 hover:border-[#151c26] focus-visible:border-[#151c26]"
      breakClassName="w-8 h-8 pb-1 border border-[#aad2f2] bg-[white] rounded-[4px] cursor-pointer transition-colors duration-200 hover:border-[#151c26] focus-visible:border-[#151c26]"
      breakLinkClassName="flex items-end justify-center w-full h-full font-bold text-[14px] text-[#151c26]"
      disabledClassName="pointer-events-none bg-[#aad2f2] opacity-30"
    />
  );
}
