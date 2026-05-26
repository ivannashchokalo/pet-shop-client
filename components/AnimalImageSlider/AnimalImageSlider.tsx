import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface Props {
  images: string[];
  name: string;
  type: string;
}

export function AnimalImageSlider({ images, name, type }: Props) {
  return (
    <Swiper
      style={{ width: 500 }}
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation
    >
      {images &&
        images.map((img) => (
          <SwiperSlide
            key={img}
            style={{ position: "relative", width: "100%", height: 400 }}
          >
            <Image
              src={img}
              fill
              alt={`${name}-${type}`}
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
