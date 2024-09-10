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
    <>
      {trends.slice(0, 4).map((trend) => (
        <Link key={trend.id} href={`blog/${trend.id}`}>
          <div className='flex justify-center w-[289px] h-[320px]'>
            <div
              className='relative rounded-xl bg-neutral-400 flex flex-col gap-4 px-8 pb-7 justify-end overflow-hidden'
              style={{
                backgroundImage: `url(${trend.cover_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50'></div>
              <p className='text-sm flex justify-center text-white bg-blue-700 w-[86px] h-[28px] rounded-md z-20'>
                {trend.tag_list[0]}
              </p>
              <p className='text-lg leading-7 w-[230px] text-white font-semibold z-10'>
                {trend.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
