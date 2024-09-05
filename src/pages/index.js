import { Header } from "@/Components/Header";
import { Page } from "@/Components/Page";
import { Content } from "@/Components/Content";
import { TrendPosts } from "@/Components/TrendPosts";
import { Content2 } from "@/Components/Content2";
import useSWR from "swr";
import moment from "moment";
import { useState } from "react";
import { Back } from "@/Icons/Back";
import { Forward } from "@/Icons/Forward";
import { LoadMore } from "@/Components/LoadMore";
import { Footer } from "@/Components/Footer";
import { Trending } from "@/Components/Trending";
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
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
    <div className="container max-w-[1216px] mx-auto">
      <Header />
      {blogs.map((blog, index) => {
        if (index === currentSlideIndex) {
          return (
            <Content
              image={blog.cover_image}
              title={blog.title}
              date={blog.date}
              tags={blog.tag_list}
            />
          );
        }
      })}
      <div className="flex flex-row justify-end gap-2 pb-[100px]">
        <div onClick={handlePrevSlide}>
          <Back />
        </div>
        <div onClick={handleNextSlide}>
          <Forward />
        </div>
      </div>
      <div className="flex flex-col gap-[30px] pb-[100px]">
        <div className="leading-3 text-2xl font-bold">
          <h3 className="flex ">Trending</h3>
        </div>
        <div className="flex flex-row gap-6 justify-center ">
          <TrendPosts />
        </div>
      </div>
      <div className="flex flex-col font-bold text-2xl leading-8 gap-8 pb-8">
        <h3>All Blog Post</h3>
        {/* <div className="flex flex-row justify-between">
          <ul className="flex flex-row gap-5 text-xs leading-6 font-semibold">
            <li className="text-yellow-500">All</li>
            <li>Design</li>
            <li>Travel</li>
            <li>Fashion</li>
            <li>Technology</li>
            <li>Branding</li>
          </ul>
          <p className="text-xs leading-6 font-semibold">View All</p>
        </div> */}
      </div>
      <div>
        <Page />
      </div>
      <div>
        <Footer />
        {/* <Trending /> */}
      </div>
    </div>
  );
};
export default Home;
