import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import data from "../../public/data/data.json";

const Footer = () => {
  return (
    <div className="w-full bg-secondary text-white py-2">
      <div className="container flex mobile:flex-col tablet:flex-row  mobile:text-center tablet:justify-between tablet:items-center w-full">
        {/* Social Icon */}
        <div className="flex items-center mobile:justify-center tablet:justify-start  gap-5 text-[20px]">
          <Link
            href={data?.bio?.contact?.github}
            target="_blank"
            className="!cursor-pointer"
          >
            <AiFillGithub></AiFillGithub>
          </Link>
          <Link
            href={`mailto:${data?.bio?.contact?.email}`}
            target="_blank"
            className="!cursor-pointer"
          >
            <AiOutlineMail></AiOutlineMail>
          </Link>
          <Link
            href={data?.bio?.contact?.linkedIn}
            target="_blank"
            className="!cursor-pointer"
          >
            <AiFillLinkedin></AiFillLinkedin>
          </Link>
        </div>
        {/* Copy Right Issue */}
        <p className="paragraph !text-slate-400 tracking-wide !mobile:text[10px]">{`© ${new Date().getFullYear()}, All rights reserved. Developed with Next.js by Munira.`}</p>
      </div>
    </div>
  );
};

export default Footer;
