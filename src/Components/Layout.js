import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className=" mx-auto">
      <Header />
      {children}
      <div className=" bg-gray-100">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
