import useSWR from "swr";
import { TagButton } from "./TagButton";
import Link from "next/link";
const url = "https://dev.to/api/articles?state=rising";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const TrendPosts = () => {
  // const { coverImage, blogTags, title } = props;
  const { data: trends, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <>
      {trends.map((trend, index) => {
        if (index < 4) {
          return (
            <Link href={`blog/${trend.id}`}>
              <div
                key={trend.id}
                className="flex justify-center w-[289px] h-[320px]">
                <div
                  className=" rounded-xl bg-center bg-neutral-400 flex flex-col gap-4 px-8 pb-7 justify-end"
                  style={{
                    backgroundImage: `url(${trend.cover_image})`,
                    backgroundSize: "500px 320px",
                    backgroundRepeat: "no-repeat",
                  }}>
                  <p className="text-sm flex justify-center text-white bg-blue-700 w-[86px] h-[28px] rounded-md">
                    {trend.tag_list[0]}
                  </p>
                  <p className="text-lg leading-7 w-[230px] text-white font-semibold">
                    {trend.title}
                  </p>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </>
  );
};
