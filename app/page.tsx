"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FcHome } from "react-icons/fc";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import data from "./../public/data/data.json";
import profileImage from "./../public/images/profile.jpg";
import Expereince from "./components/Expereince";
import Projects from "./components/Projects";
import Recommandation from "./components/Recommandation";
import Service from "./components/Service";
import StickyEmail from "./components/StickyEmail";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <main className="flex flex-col w-full text">
      <div className="container">
        <div className="flex mobile:flex-col laptop:flex-row justify-start items-start py-5 gap-5">
          <div className="flex-none laptop:w-[32%] mobile:w-[100%]">
            {isLoading ? (
              <SkeletonTheme
                baseColor="#e6f0ff"
                highlightColor="#ecf7f9"
                duration={5}
                enableAnimation={true}>
                <Skeleton className="main__profile__image !h-[450px]" />
              </SkeletonTheme>
            ) : (
              <Image
                alt="Profile Photo"
                src={profileImage}
                className="main__profile__image"></Image>
            )}
            <p className="icon__heading !font-firaCode !py-2 !text-secondary">
              <FcHome></FcHome>Avaiable for remote work...
            </p>
          </div>
          <div className="flex flex-col justify-start laptop:w-[65%] mobile:w-[100%] flex-none">
            <h1 className="main__heading">{data?.bio?.name}</h1>
            <h6 className="sub__heading">{data?.bio?.title}</h6>
            <p className="paragraph">{data?.bio?.intro}</p>

            <p className="paragraph">{data?.bio?.desc}</p>

            <hr></hr>
            <div className="flex tablet:justify-between mobile:justify-start flex-wrap items-center py-3">
              <div>
                <h6 className="sub__heading !text-secondary !tracking-normal">
                  Freelance At
                </h6>
                <p className="plain__btn">Upwork & PPH</p>
              </div>

              <div>
                <h6 className="sub__heading !text-secondary !tracking-normal tablet:text-right mobile:pt-3">
                  Learner At
                </h6>
                <Link
                  href={"https://stacklearner.com/"}
                  target="_blank"
                  className="plain__btn !text-right">
                  Stack Learner - Full Stack Army
                </Link>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
        <Service data={data}></Service>
        <Projects data={data}></Projects>
        <Expereince data={data}></Expereince>
        <Recommandation data={data}></Recommandation>
        <StickyEmail></StickyEmail>
      </div>
    </main>
  );
}
