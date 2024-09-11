import { Facebook } from "@/Icons/Facebook";
import { FooterLogo } from "@/Icons/FooterLogo";
import { Insta } from "@/Icons/Insta";
import { Linkedin } from "@/Icons/Linkedin";
import { MetaBlogLogo } from "@/Icons/MetaBlogLogo";
import { Twitter } from "@/Icons/Twitter";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" mx-auto px-4 pt-16">
      <div className=" grid grid-cols-3 gap-6 bg-gray-100 pb-[25px]">
        <div className="w-[280px] ">
          <h1 className="text-lg font-semibold pb-4">About</h1>
          <p className="text-base font-normal pb-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="flex gap-1">
            <p className="font-semibold">Email: </p>
            <p>info@jstemplate.net</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold ">Phone: </p>
            <p> 880 123 456 789</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-start gap-2 px-[110px] cursor-pointer">
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-5 cursor-pointer">
          <Link href="https://www.facebook.com/pinecone.academy.mongolia">
            <Facebook />
          </Link>
          <Link href="https://x.com/">
            <Twitter />
          </Link>
          <Link href="https://www.instagram.com/pineconemongolia">
            <Insta />
          </Link>
          <Link href="https://mn.linkedin.com/">
            <Linkedin />
          </Link>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-500">
        <div className="flex py-8 gap-4 ">
          <Link href="/">
            <FooterLogo />
          </Link>
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-xl">Meta</p>
              <p className="text-xl font-bold">Blog</p>
            </div>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div>
          <ul className="flex flex-row gap-8 py-8">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
