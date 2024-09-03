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
    setCurrentSlideIndex((prev) => prev - 1);
  };

  return (
    <div className="container max-w-screen-2xl mx-auto">
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
      <div className="flex flex-row justify-end">
        <div onClick={handlePrevSlide}>
          <Back />
        </div>
        <div onClick={handleNextSlide}>
          <Forward />
        </div>
      </div>
      <div className="">
        <div>
          <h3>Trending</h3>
        </div>
        <div className="flex flex-row gap-6 ">
          {blogs.map((blog, index) => {
            if (index < 4) {
              return (
                <TrendPosts
                  coverImage={blog.cover_image}
                  blogTags={blog.tag_list[0]}
                  title={blog.title}
                />
              );
            }
          })}
        </div>
      </div>
      <Page />
    </div>
  );
};
export default Home;
