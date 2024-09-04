import { TagButton } from "./TagButton";

export const TrendPosts = (props) => {
  const { coverImage, blogTags, title } = props;
  return (
    <div className="flex justify-center">
      <div
        className="h-80 w-72 rounded-xl bg-center bg-neutral-400 "
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "500px 320px",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="flex flex-col gap-4 pt-[172px] px-[30px] pb-[28px]">
          <p className="text-sm text-white bg-blue-700 rounded-md w-[86px] h-[28px]">
            {blogTags}
          </p>{" "}
          <p className="text-lg leading-7 w-[230px] h-[76px] text-white font-semibold">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
