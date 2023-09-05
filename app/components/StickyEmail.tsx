import Link from "next/link";
import data from "../../public/data/data.json";

const StickyEmail = () => {
  return (
    <Link href={`mailto:${data?.bio?.contact?.email}`} className="sticky__mail">
      {data?.bio?.contact?.email}
    </Link>
  );
};

export default StickyEmail;
