const { Page } = require("@/Components/Page");
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import { useState } from "react";
import { BlogCard } from "@/Components/BlogCard";
import { LoadMore } from "@/Components/LoadMore";
import { MyBlogCard } from "@/Components/MyBlogCard";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllBLogPost = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const url = `https://dev.to/api/articles`;
  const [addPost, setAddPost] = useState(12);
  const { data: blogPost = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>Loading</div>;

  const postLoadMore = () => {
    setAddPost((more) => more + 3);
  };

  return (
    <div className="container max-w-[1216px] mx-auto">
      <div className="flex flex-col font-bold text-2xl leading-8 gap-8 pb-8">
        <h3>All Blog Post</h3>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-5">
        {blogPost.map((post, index) => {
          if (index < addPost)
            return (
              <div className="h-[488px]">
                <MyBlogCard
                  key={post.id}
                  image={post.cover_image}
                  title={post.title}
                  tag={post.tag_list[0]}
                  profile={post.user.profile_image}
                  username={post.user.name}
                  date={moment(post.published_at).format("MMMM DD, YYYY")}
                />
              </div>
            );
        })}
        <div onClick={postLoadMore} className="flex w-full justify-center">
          <LoadMore />
        </div>
      </div>
    </div>
  );
};
export default AllBLogPost;
