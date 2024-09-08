import useSWR from "swr";
import moment from "moment";
import { LoadMore } from "./LoadMore";
import { useState } from "react";
import { AllTags } from "./AllTags";
const url = "https://dev.to/api/articles";
import Link from "next/link";
import { BlogCard } from "./BlogCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Page = () => {
  const [addSlide, setAddSlide] = useState(9);
  const { data: blogdata = {}, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return null;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const clickLoadMore = () => {
    setAddSlide((more) => more + 9);
  };

  return (
    <div>
      <AllTags />

      <div className=' grid grid-cols-3 mx-auto gap-5'>
        {blogdata.map((blog, index) => {
          if (index < addSlide) {
            return (
              <div>
                <Link href={`blog/${blog.id}`}>
                  <BlogCard
                    key={blog.id}
                    image={blog.cover_image}
                    tag={blog.tag_list[0]}
                    title={blog.title}
                    date={moment(blog.published_at)
                      .utc()
                      .format("MMMM DD, YYYY")}
                  />
                </Link>
              </div>
            );
          }
        })}
      </div>
      <div onClick={clickLoadMore}>
        <LoadMore />
      </div>
    </div>
  );
};
