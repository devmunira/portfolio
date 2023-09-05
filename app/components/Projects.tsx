"use client";
import Image from "next/image";
import Link from "next/link";
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

const Projects: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex mobile:flex-col laptop:flex-row items-stretch gap-5 mb-[100px] relative">
      <div className="mobile:max-w-[100%] laptop:max-w-[10%]">
        <Heading text="Some Things I’ve Built" number={3}></Heading>
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
        navigation={true}
      >
        {data?.projects?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="laptop:h-[480px] mobile:h-[auto] box-border flex mobile:flex-col laptop:flex-row justify-between items-center relative w-full py-10 bg-primary-100 p-10 rounded-md">
              <div className="flex-initial mobile:w-[100%] laptop:w-[50%]">
                <Image
                  src={item?.thumbnail}
                  alt="project_one"
                  className="project__photo"
                  objectFit="contain"
                  width={5000}
                  height={5000}
                ></Image>
              </div>
              <div className="mobile:w-[100%] laptop:w-[50%] flex justify-end flex-col">
                <h2 className="icon__heading !text-[16px] !font-poppins!text-right">
                  Featured Project
                </h2>
                <h2 className="sub__heading !font-poppins !text-[24px] py-2">
                  {item?.title}
                </h2>
                <div className="flex gap-4 items-center flex-wrap">
                  <Link
                    href={item?.srs}
                    target="_blank"
                    className="plain__btn !text-[12px] !font-poppins !font-semibold !cursor-pointer"
                  >
                    SRS
                  </Link>
                  <Link
                    href={item?.code}
                    target="_blank"
                    className="plain__btn !text-[12px] !font-poppins !font-semibold !cursor-pointer"
                  >
                    Code
                  </Link>
                  <Link
                    href={item?.live}
                    target="_blank"
                    className="plain__btn !text-[12px] !font-poppins !font-semibold !cursor-pointer"
                  >
                    Live
                  </Link>
                </div>
                <p className="paragraph py-2">{item?.desc}</p>

                <div className="flex gap-2 items-center py-2 flex-wrap">
                  {item?.Tech?.map((item, index) => (
                    <span
                      key={index}
                      className="badge !bg-blue-bg !text-white !border-0"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
