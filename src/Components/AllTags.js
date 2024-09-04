import { useState } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/tags";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const AllTags = () => {
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
    <div className="flex justify-between py-8">
      <div className="flex  gap-5">
        <p className="text-yellow-500">All</p>
        {tags.map((tag, index) => {
          if (index < viewAll)
            return (
              <div key={tag.id}>
                <p>{tag.name}</p>
              </div>
            );
        })}
      </div>

      <p onClick={clickAddTags}>View All</p>
    </div>
  );
};
