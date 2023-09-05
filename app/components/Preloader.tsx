import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";

const Preloader = () => {
  return (
    <div className="bg-slate-300 flex justify-center items-center h-[100vh] w-[100%]">
      <UseAnimations animation={infinity} size={56} />
    </div>
  );
};

export default Preloader;
