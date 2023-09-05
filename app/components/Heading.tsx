const Heading = ({ number, text }: { number: number; text: string }) => {
  return (
    <div className="bg-primary-100 min-w-[50px] !h-full flex laptop:justify-center mobile:justify-start laptop:max-w-[50px] mobile:max-w-full">
      <h2 className="vertical__heading">
        <span className="">{number}.</span>
        {` ${text}`}
      </h2>
    </div>
  );
};

export default Heading;
