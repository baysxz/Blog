import { createContext } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return (
      <div className='h-full w-full flex justify-center content-center'>
        <span className='justify-center content-center loading loading-spinner loading-lg'></span>
      </div>
    );
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }
  return <DataContext.Provider value={blogs}>{children}</DataContext.Provider>;
};
