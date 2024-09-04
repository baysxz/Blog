import { Back } from "@/Icons/Back";
import { Forward } from "@/Icons/Forward";
import moment from "moment";

export const Content = (props) => {
  const { image, title, date, tags } = props;
  return (
    <div>
      <div className="relative flex justify-center pt-[100px]">
        <img className="rounded-2xl w-[1216px] h-[600px]" src={image}></img>
        {""}
        <div className=" w-[598px] h-[252px] bg-white absolute bottom-[13px] left-[11px] rounded-xl p-10">
          <div className="w-[97px] h-[28px] font-normal text-sm text-white  bg-blue-700 rounded-md text-center">
            {tags[0]}
          </div>
          <div className="text-3xl text-slate-950 font-medium pt-4 pb-6">
            {title}
          </div>
          <div className="text-base">{moment(date).format("ll")}</div>
        </div>
      </div>
    </div>
  );
};
