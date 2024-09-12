import Link from "next/link";
import { Logo } from "../Icons/Logo";
import { Search } from "@/Icons/Search";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between sm:py-8 lg:w-[1216px] mx-auto p-5">
      <div>
        <Logo className="w-[158] h-[36]" />
      </div>
      <div className="hidden sm:block">
        <ul className=" flex flex-row gap-10  ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className="hidden sm:block">
        <Search className="w-[166px] h-[36] cursor-pointer" />
      </div>
      <div className="block sm:hidden">
        <Menu />
      </div>
    </div>
  );
};
