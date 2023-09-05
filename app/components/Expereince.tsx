import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { DataType } from "../types";
import Heading from "./Heading";

interface Props {
  data: DataType;
}

const Expereince: React.FC<Props> = ({ data }) => {
  return (
    <div className="section">
      <div className="py-20 gap-10 flex mobile:flex-col laptop:flex-row justify-between items-stretch">
        <div className="flex-none laptop:max-w-[5%] mobile:max-w-[100%] mobile:mb-5 mb-0 ">
          <Heading text="Expirence & Job Details" number={2}></Heading>
        </div>

        <div className="flex-none gap-10 py-10 laptop:max-w-[95%] mobile:w-[100%] flex laptop:flex-row flex-wrap mobile:flex-col">
          {data?.expreience?.map((item, index) => (
            <div
              key={index}
              className="desktop:w-[31%] laptop:w-[45%] mobile:w-[100%]"
            >
              <div className="cursor-pointer">
                <div className="flex-none">
                  <Link
                    href={item?.link}
                    target="_blank"
                    className="sub__heading !text-[16px] flex tablet:gap-2 tablet:items-center mobile:items-start !cursor-pointer"
                  >
                    {item?.companyName}{" "}
                    <BiLinkExternal className="bg-blue-bg text-white"></BiLinkExternal>
                  </Link>

                  <h2 className="sub__heading !text-slate-500 !text-[14px] !font-poppins pt-2">
                    {item?.title}
                  </h2>

                  <h6 className="!font-semibold !font-firaCode !text-slate-700 !text-[12px] !mt-2">
                    {item?.date}
                  </h6>

                  <p className="paragraph !pt-2">{item?.desc}</p>

                  <div className="flex gap-2 items-center flex-wrap">
                    {item?.skills?.map((item, index) => (
                      <span
                        key={index}
                        className="badge !bg-primary-100 !border-0"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expereince;
