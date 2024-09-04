import useSWR from "swr";
import moment from "moment";
import { LoadMore } from "./LoadMore";
import { useState } from "react";
import { AllTags } from "./AllTags";
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Page = () => {
  const [addSlide, setAddSlide] = useState(9);
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
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
      <div className=" grid grid-cols-3 mx-auto gap-5">
        {data.map((blog, index) => {
          if (index < addSlide) {
            return (
              <BlogCard
                key={blog.id}
                image={blog.cover_image}
                tag={blog.tag_list}
                title={blog.title}
                date={moment(blog.published_at).utc().format("MMMM DD, YYYY")}
              />
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

// export default Page;
const BlogCard = (props) => {
  const { image, title, tag, date } = props;

  return (
    <div>
      <div className="px-4 py-2 border border-solid rounded w-fit">
        <div>
          <img className="h-60 w-90" src={image} alt={title} />
        </div>
        <div>
          <p>{tag[0]}</p>
          <h2 className="text-2xl">{title}</h2>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
