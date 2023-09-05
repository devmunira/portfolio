import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";

const Preloader = () => {
  return (
    <div className="bg-primary-100 flex justify-center items-center h-[100vh] w-[100%]">
      <UseAnimations strokeColor="#279EFF" animation={infinity} size={56} />
    </div>
  );
};

export default Preloader;
