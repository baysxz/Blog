import { useRouter } from "next/router";
import useSWR from "swr";
import parse from "html-react-parser";
import { Header } from "@/Components/Header";
import moment from "moment";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetail = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>Loading</div>;

  return (
    <div className=" container max-w-[1216px] mx-auto">
      <Header />
      <div className="px-[208px]">
        <div className="text-4xl text-black font-semibold pt-[100px] pb-5">
          {blogDetail.title}
        </div>
        <div className="flex gap-2">
          <img
            className="w-7 h-7 rounded-3xl"
            src={blogDetail.user.profile_image}
          />
          <div className="flex flex-row gap-6 text-sm text-gray-600">
            <p>{blogDetail.user.name}</p>
            <p>
              {" "}
              {moment(blogDetail.readable_publish_date)
                .utc()
                .format("MMMM DD, YYYY")}
            </p>
          </div>
        </div>
        <div className="py-8">
          <img className="w-[800px] h-[462px]" src={blogDetail.cover_image} />
        </div>
        <div className="text-xl text-gray-600 leading-8">
          {parse(blogDetail.body_html)}
        </div>
      </div>
    </div>
  );
};

export default Page;
