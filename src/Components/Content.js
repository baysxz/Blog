import { Back } from "@/Icons/Back";
import { Forward } from "@/Icons/Forward";

export const Content = () => {
  return (
    <div>
      <div>
        <img className="w-[1216] h-[600] justify-center" src="image.png" />
      </div>
      <div className="flex flex-col w-[530] h-[252] bg-red-600 text-4xl">
        <p>Grid system for better </p>
        <p>Design User Interface</p>
      </div>
      <div className="flex flex-row justify-end">
        <Back />
        <Forward />
      </div>
    </div>
  );
};
