import Link from "next/link";
import data from "../../public/data/data.json";
import Button from "./Button";

const Header = () => {
  return (
    <div className="bg-primary-100 !mobile:w-full px-0 mx-0">
      <div className="container py-1 w-full flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold tracking-wide text-[18px] font-firaCode text-secondary">
          {"<munira/>"}
        </div>
        {/* Menu */}
        <Link href={`mailto:${data?.bio?.contact?.email}`}>
          <Button
            type="button"
            title="Hire Me"
            customClass="!text-[15px] !py-2"
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
