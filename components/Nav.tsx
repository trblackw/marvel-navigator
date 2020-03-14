import * as React from "react";
import Link from "next/link";
// @ts-ignore
import marvelComicLogo from "../assets/marvel-comic-logo.svg";
import { useRouter } from "next/router";

const Nav = () => {
  const { pathname } = useRouter();
  const linkClassName = (route: string) =>
    `cursor-pointer mr-3 ${pathname.startsWith(route) ? "font-bold" : ""}`;
  return (
    <div className="mb-3 flex flex-row justify-between items-center w-full">
      <Link href="/">
        <a className="cursor-pointer">
          <img
            src={marvelComicLogo}
            alt="marvel comic logo"
            style={{ height: 80 }}
            className="rounded-md"
          />
        </a>
      </Link>
      <div>
        <Link href="/">
          <a className={linkClassName("/")}>Characters</a>
        </Link>
        <Link href="/comics">
          <a className={linkClassName("comics")}>Comics</a>
        </Link>
        <Link href="/events">
          <a className={linkClassName("events")}>Events</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
