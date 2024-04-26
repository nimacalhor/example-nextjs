import { SwiperProps } from "swiper/react";
import { toFarsiNumber } from "@global/utils/digit-utils";
import { makeArray } from "@global/utils/array-utils";

const pagination: SwiperProps["pagination"] = {
  clickable: true,
  // renderBullet: function (index, className) {
  //   console.log({className})
  //   return `<span class="inline text-gray-50 mx-1 text-xs ${className}">${(toFarsiNumber(index + 1))}</span>`
  // },
  type: "bullets",
};

export default pagination;
