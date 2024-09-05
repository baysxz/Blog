// import useSWR from "swr";
// const url = "https://dev.to/api/articles";
// import Link from "next/link";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export const Trending = () => {
//   const { data: blogs = {}, isLoading } = useSWR(url, fetcher);

//   // skeleton loading

//   if (isLoading) return <div>Loading</div>;

//   return (
//     <div>
//       {blogs.map((blog) => (
//         <Link href={`blog/${blog.id}`}>
//           <div className="p-4">{blog.title}</div>
//         </Link>
//       ))}
//     </div>
//   );
// };
