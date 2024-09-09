import { useRouter } from "next/router";
import useSWR from "swr";
import parse from "html-react-parser";
import moment from "moment";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Content = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const url = `https://dev.to/api/articles/${contentId}`;
};
