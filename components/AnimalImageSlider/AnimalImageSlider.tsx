import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icon from "../Icon/Icon";

interface Props {
  images: string[];
  name: string;
  type: string;
}

export function AnimalImageSlider({ images, name, type }: Props) {
  return (
    <div className="relative h-[240px] w-full overflow-hidden rounded-[20px] md:h-[400px] xl:w-[630px]">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="h-full w-full"
      >
        {images.map((img) => (
          <SwiperSlide key={img} className="relative h-full w-full">
            <Image
              src={img}
              fill
              alt={`${name} ${type}`}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="custom-prev swiper-button-disabled absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[20px] bg-[rgba(199,224,246,0.5)]  transition-colors duration-200
    hover:bg-[#c7e0f6]
    focus-visible:bg-[#c7e0f6]"
      >
        <Icon name="icon-left" className="stroke-[#fafafa] fill-none" />
      </button>

      <button
        className="custom-next swiper-button-disabled absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[20px] bg-[rgba(199,224,246,0.5)]  transition-colors duration-200
    hover:bg-[#c7e0f6]
    focus-visible:bg-[#c7e0f6]"
      >
        <Icon name="icon-right" className="stroke-[#fafafa] fill-none" />
      </button>
    </div>
  );
}
