import { Facebook } from "@/Icons/Facebook";
import { FooterLogo } from "@/Icons/FooterLogo";
import { Insta } from "@/Icons/Insta";
import { Linkedin } from "@/Icons/Linkedin";
import { MetaBlogLogo } from "@/Icons/MetaBlogLogo";
import { Twitter } from "@/Icons/Twitter";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" w-[1216px] mx-auto px-4 pt-16">
      <div className=" grid grid-cols-3 gap-6 bg-gray-100 pb-[25px]">
        <div className="w-[280px] ">
          <h1 className="text-lg font-semibold pb-4">About</h1>
          <p className="text-base font-normal pb-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
          {/* <div className='text-base font-semibold'>
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div> */}
        </div>
        <div className="flex flex-col justify-center text-start gap-2 px-[110px]">
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex gap-5">
          <Facebook />
          <Twitter />
          <Insta />
          <Linkedin />
        </div>
      </div>
      <div className="flex py-8 gap-4">
        <Link href="/">
          <FooterLogo />
        </Link>

        <div>
          <div className="flex">
            <p className="text-xl">Meta</p>
            <p className="text-xl font-bold">Blog</p>
          </div>
          <p>© All Rights Reserved.</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-row gap-8">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};
