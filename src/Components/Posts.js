import useSWR from "swr";
import moment from "moment";
import { LoadMore } from "./LoadMore";
import { useState } from "react";
import { AllTags } from "./AllTags";
const url = "https://dev.to/api/articles";
import Link from "next/link";
import { BlogCard } from "./BlogCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Posts = () => {
  const [addSlide, setAddSlide] = useState(9);
  const [selectedTag, setSelectedTag] = useState("");
  const { data: blogdata, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return null;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const clickLoadMore = () => {
    setAddSlide((more) => more + 9);
  };

  const filteredByTag = blogdata.filter((blog) => {
    if (selectedTag === "") return true;

    if (blog.tag_list.includes(selectedTag)) {
      return true;
    }
  });

  const hasMoreToLoad = filteredByTag.length > addSlide;

  return (
    <div className="px-8 ">
      <AllTags selectedTag={selectedTag} handleSelectTag={setSelectedTag} />

      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-col justify-center items-center mx-auto gap-5 mb-[100px]">
        {filteredByTag.map((blog, index) => {
          if (index < addSlide) {
            return (
              <div key={blog.id}>
                <Link href={`blog/${blog.id}`}>
                  <BlogCard
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
      {hasMoreToLoad && (
        <div onClick={clickLoadMore}>
          <LoadMore />
        </div>
      )}
    </div>
  );
};
