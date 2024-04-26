"use client";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import InstaImageSkeleton from "../InstaImageSkeleton";
import { Navigation, Pagination } from "swiper/modules";
import { RootState } from "@global/store";

const InstaImage = dynamic(() => import("../InstaImage"), {
  loading: () => <InstaImageSkeleton />,
});

type InstaImageSlidesProps = { srcSet: string[]; quality?: number };

function InstaImageSlides({ quality, srcSet }: InstaImageSlidesProps) {
  const { nsfw } = useSelector((state: RootState) => state.media);

  return (
    <>
      <Swiper
        autoHeight={true}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className={`mySwiper`}
      >
        {srcSet.map((src, i) => (
          <SwiperSlide key={i} className="px-5 pt-3 pb-3">
            <InstaImage src={src} nsfw={nsfw} quality={quality} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default InstaImageSlides;
