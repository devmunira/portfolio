"use client";
import Link from "next/link";
import { CgQuote } from "react-icons/cg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { A11y, EffectCreative, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DataType } from "../types";
import Heading from "./Heading";

interface Props {
  data: DataType;
}

const Recommandation: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex mobile:flex-col laptop:flex-row items-stretch gap-5 mb-[100px] relative">
      <div className="mobile:max-w-[100%] laptop:max-w-[10%]">
        <Heading text="Recomandations" number={4}></Heading>
      </div>

      <Swiper
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={true}
        modules={[EffectCreative, Navigation, Scrollbar, A11y]}
        className="mobile:max-w-[100%] laptop:max-w-[90%]"
        navigation={true}>
        {data?.recommandations?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="laptop:h-[350px] mobile:h-[auto] box-border flex flex-col text-center justify-center items-center w-full  bg-primary-100 py-10 px-16 rounded-md">
              <CgQuote className="text-slate-500 text-[60px]"></CgQuote>
              <p className="paragraph !text-slate-900">
                {item?.text}{" "}
                <Link
                  href={item?.link}
                  target="_blank"
                  className="plain__btn !lowercase !text-blue-bg !font-semibold">
                  ...see more
                </Link>
              </p>
              <div className="border-t border-slate-300 w-full my-4"></div>
              <h4 className="sub__heading !text-slate-700">{item?.name}</h4>
              <h6 className="icon__heading !text-slate-600 !font-normal">
                {item?.title}
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommandation;
