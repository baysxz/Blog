import { useState } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/tags";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const AllTags = (props) => {
  const { selectedTag, handleSelectTag } = props;
  const [viewAll, setViewAll] = useState(5);

  const { data: tags, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const clickAddTags = () => {
    setViewAll(tags.length);
  };

  return (
    <div className='flex justify-between py-8'>
      <div className='flex  gap-5'>
        <p className='text-yellow-500' onClick={() => handleSelectTag("")}>
          All
        </p>
      </div>
      {tags.map((tag, index) => {
        if (index < viewAll)
          return (
            <div key={tag.id} onClick={() => handleSelectTag(tag.name)}>
              {tag.name}
            </div>
          );
      })}
      <p onClick={(clickAddTags, () => handleSelectTag(""))}>View All</p>
    </div>
  );
};
