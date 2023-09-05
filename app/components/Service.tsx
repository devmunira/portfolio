import { DataType } from "../types";
import { skills } from "./../../public/data/skills";
import Heading from "./Heading";

interface ServiceProps {
  data: DataType;
}

const Service: React.FC<ServiceProps> = ({ data }) => {
  return (
    <div className="section py-5 flex laptop:flex-row mobile:flex-col justify-start gap-10 items-stretch w-full">
      <div>
        <Heading text="Expertize & Skills" number={1}></Heading>
      </div>
      <div className="expirtise__section flex-none laptop:max-w-[40%] mobile:max-w-[100%]">
        <h2 className="sub__heading !font-bold !text-[20px] !font-firaCode">
          What I can do.
        </h2>
        <p className="paragraph">{data?.bio?.whatCanI}</p>

        {data?.whatICan?.map((item, index) => (
          <div className="" key={index}>
            <p className="paragraph">
              <span className="sub__heading">{item?.title}</span> {item?.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="skills__section flex-none laptop:max-w-[50%] mobile:max-w-[100%]">
        <h2 className="sub__heading !font-bold !text-[20px] pb-3">
          Technical Skill.
        </h2>
        <div className="flex justify-start gap-3 items-center flex-wrap ">
          {skills &&
            skills.length > 0 &&
            skills.map((item, index) => (
              <div className="badge" key={index}>
                <span className="flex gap-2 items-center">
                  <span className="text-[14px]">{item?.icon}</span>
                  {item?.name}
                </span>
              </div>
            ))}
        </div>
        <h2 className="sub__heading !font-bold !text-[20px] pb-3 pt-5">
          Soft Skill.
        </h2>
        <div className="flex justify-start gap-3 items-center flex-wrap ">
          {data?.softSkills &&
            data?.softSkills.length > 0 &&
            data?.softSkills.map((item, index) => (
              <div className="badge" key={index}>
                <span>{item}</span>
              </div>
            ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Service;
