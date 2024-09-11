import { useState } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/tags";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const AllTags = (props) => {
  const { selectedTag, handleSelectTag } = props;
  const [viewAll, setViewAll] = useState(false);

  const { data: tags, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const toggleViewAll = () => {
    setViewAll((prev) => !prev);
  };

  return (
    <div className='flex flex-wrap lg:justify-between py-8 cursor-pointer'>
      <div className='flex flex-wrap gap-5'>
        <p className='text-yellow-500' onClick={() => handleSelectTag("")}>
          All
        </p>
        {tags.slice(0, viewAll ? tags.length : 5).map((tag) => (
          <div
            className='fl'
            key={tag.id}
            onClick={() => handleSelectTag(tag.name)}>
            {tag.name}
          </div>
        ))}
      </div>

      <p onClick={toggleViewAll} className='cursor-pointer'>
        {viewAll ? "Show Less" : "View All"}
      </p>
    </div>
  );
};
