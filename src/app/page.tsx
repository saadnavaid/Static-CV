import LeftSide from "./Components/Left Side/page";
import RightSide from "./Components/Right Side/page";

export default function Home() {
  return (
  <div className="font-sans">
      <div className=" bg-gray-500 text-white text-xl">
        Static Resume
      </div>
      <div className="flex flex-row mt-2 mx-48">
        <div className="w-5/12"><LeftSide /></div>
        <div className="w-screen"><RightSide /></div>
      </div>
  </div>
  );
}
