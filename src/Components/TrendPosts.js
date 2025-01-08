import useSWR from "swr";
import { TagButton } from "./TagButton";
import Link from "next/link";

const url = "https://dev.to/api/articles?state=rising";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const TrendPosts = () => {
  const { data: trends, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div className="carousel carousel-center rounded-box space-x-4 p-4 px-8">
      {trends.slice(0, 19).map((trend) => (
        <Link key={trend.id} href={`blog/${trend.id}`}>
          <div className="flex justify-center carousel-item w-[289px] h-[320px]">
            <div
              className="relative rounded-xl bg-neutral-400 flex flex-col gap-4 px-8 pb-7 justify-end overflow-hidden "
              style={{
                backgroundImage: `url(${trend.cover_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <p className="text-sm flex text-white bg-[#4B6BFB] justify-center items-center w-[86px] h-[28px] rounded-md z-20">
                {trend.tag_list[0]}
              </p>
              <p className="text-lg leading-7 w-[230px] text-white font-semibold z-10">
                {trend.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
