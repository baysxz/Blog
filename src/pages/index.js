import { Content } from "@/Components/Content";
import { TrendPosts } from "@/Components/TrendPosts";
import useSWR from "swr";
import { useState } from "react";
import { Back } from "@/Icons/Back";
import { Forward } from "@/Icons/Forward";
import { Posts } from "@/Components/Posts";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const { data: blogs, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center content-center">
        <span className="justify-center content-center loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) setCurrentSlideIndex((prev) => prev - 1);
  };

  return (
    <div className="container lg:max-w-[1216px] lg: mx-auto ">
      {blogs.map((blog, index) => {
        if (index === currentSlideIndex) {
          return (
            <Content
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.date}
              tags={blog.tag_list}
              id={blog.id}
            />
          );
        }
      })}
      <div className="hidden sm:block">
        <div className="flex flex-row justify-end gap-2 pb-[100px] pt-2">
          <div onClick={handlePrevSlide}>
            <Back />
          </div>
          <div onClick={handleNextSlide}>
            <Forward />
          </div>
        </div>
      </div>

      <div className="flex flex-col py-[30px] sm:pt-0 sm:gap-[30px] sm:pb-[100px] ">
        <div className="leading-3 text-2xl font-bold">
          <h3 className="flex pb-[30px] sm:pb-0 ">Trending</h3>
        </div>
        <div className="flex flex-row gap-6 justify-center ">
          <TrendPosts />
        </div>
      </div>
      <div className="flex flex-col font-bold text-2xl leading-8 ">
        <h3>All Blog Post</h3>
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
};
export default Home;
