import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className='container max-w-[1216px] mx-auto sm:p-4'>
      <Header />
      {children}
      <div className=' bg-gray-100'>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
