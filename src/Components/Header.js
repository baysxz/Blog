import Link from "next/link";
import { Logo } from "../Icons/Logo";
import { Search } from "@/Icons/Search";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between py-8 w-[1216px] mx-auto sm:p-4">
      <div>
        <Logo className="w-[158] h-[36]" />
      </div>
      <div>
        <ul className="flex flex-row gap-10">
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

      <div>
        <Search className="w-[166px] h-[36] cursor-pointer" />
      </div>
    </div>
  );
};
