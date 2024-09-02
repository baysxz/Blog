import { Header } from "@/Components/Header";
import { Page } from "@/Components/Page";
import { Content } from "@/Components/Content";

const Home = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto">
      <Header />
      <Content />
      <Page />
    </div>
  );
};
export default Home;
