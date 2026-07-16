import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Icon from "../Icon/Icon";
import clsx from "clsx";

interface AnimalImageSliderProps {
  images: string[];
  name: string;
  type: string;
}

const navigationButtonClass =
  "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[20px] bg-[rgba(199,224,246,0.5)] transition-colors duration-200 hover:bg-[var(--bg-primary)] focus-visible:bg-[var(--bg-primary)]";
const navigationIconClass = "stroke-[#fafafa] fill-none";

export function AnimalImageSlider({
  images,
  name,
  type,
}: AnimalImageSliderProps) {
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
        type="button"
        aria-label="Previous image"
        className={clsx(navigationButtonClass, "custom-prev left-4")}
      >
        <Icon name="icon-left" className={navigationIconClass} />
      </button>

      <button
        type="button"
        aria-label="Next image"
        className={clsx(navigationButtonClass, "custom-next right-4")}
      >
        <Icon name="icon-right" className={navigationIconClass} />
      </button>
    </div>
  );
}
