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
    <div className="section py-20 flex mobile:flex-col laptop:flex-row justify-between items-stretch">
      <div className="flex-none laptop:order-1 mobile:order-2 laptop:max-w-[95%] mobile:max-w-[100%] flex laptop:flex-row flex-wrap gap-y-16 mobile:flex-col">
        {data?.expreience?.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-stretch flex-none laptop:w-[50%] mobile:w-[100%] text-justify"
          >
            <div className="flex justify-start items-stretch gap-5 cursor-pointer">
              <h6
                className={`flex-none max-w-[25%] !font-semibold !font-firaCode hidden tablet:hidden laptop:hidden desktop:block !text-slate-700 ${
                  index == 0 || index == 1 ? "desktop:pr-10 mobile:pr-0" : ""
                }`}
              >
                {item?.date}
              </h6>
              <div className="flex-none laptop:max-w-[75%] mobile:w-[100%]">
                <Link
                  href={item?.link}
                  target="_blank"
                  className="sub__heading flex tablet:gap-2 tablet:items-center mobile:items-start !cursor-pointer"
                >
                  {item?.companyName} <BiLinkExternal></BiLinkExternal>
                </Link>

                <h2 className="sub__heading !text-[12px] !font-poppins pt-2">
                  {item?.title}
                </h2>

                <h6 className="!font-semibold !font-firaCode tablet:block mobile:block laptop:block desktop:hidden !text-slate-600 !text-[10px] !mt-2">
                  {item?.date}
                </h6>

                <p className="paragraph !pt-2 max-w-[80%]">{item?.desc}</p>

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

      <div
        className="flex-none laptop:max-w-[5%] mobile:max-w-[100%] 
        laptop:order-2 mobile:order-1 mobile:mb-10 mb-0 "
      >
        <Heading text="Expirence & Job Details" number={2}></Heading>
      </div>
    </div>
  );
};

export default Expereince;
