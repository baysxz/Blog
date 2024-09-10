import { useRouter } from "next/router";
import useSWR from "swr";
import parse from "html-react-parser";
import moment, { ISO_8601 } from "moment";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetail = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>Loading</div>;
  const bodyMarkdown = blogDetail.body_markdown;

  return (
    <div className=' container max-w-[1216px] mx-auto'>
      <div className='px-[208px]'>
        <div className='text-4xl text-black font-semibold pt-[100px] pb-5'>
          {blogDetail.title}
        </div>
        <div className='flex gap-2'>
          <img
            className='w-7 h-7 rounded-3xl'
            src={blogDetail.user.profile_image}
          />
          <div className='flex flex-row gap-6 text-sm text-gray-600'>
            <p>{blogDetail.user.name}</p>
            <p>
              {moment(blogDetail.readable_publish_date).format("MMMM DD, YYYY")}
            </p>
          </div>
        </div>
        <div className='justify-center'>
          <img
            className='w-[800px] h-[462px] py-8'
            src={blogDetail.cover_image}
          />
        </div>
        <div className='prose'>
          <Markdown rehypePlugins={[rehypeHighlight]}>{bodyMarkdown}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Page;
