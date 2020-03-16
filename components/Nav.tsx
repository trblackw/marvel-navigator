import * as React from "react";
import Link from "next/link";
// @ts-ignore
import marvelComicLogo from "../assets/marvel-comic-logo.svg";
import { useRouter } from "next/router";
import { useState } from "react";

const Nav = () => {
  const { pathname } = useRouter();
  const [mobileNavExpanded, setMobileNavExpanded] = useState<boolean>(false);

  const linkClassName = (route: string) =>
    `cursor-pointer ${pathname.startsWith(route) ? "font-bold" : ""}`;
  return (
    <div className="mb-3 flex flex-row justify-between items-center w-full">
      <Link href="/">
        <a className="cursor-pointer">
          <img
            src={marvelComicLogo}
            alt="marvel comic logo"
            className="rounded-md logo"
          />
        </a>
      </Link>
      <div className="desktop-nav">
        <Link href="/">
          <a className={linkClassName("/") + " mr-3"}>Characters</a>
        </Link>
        <Link href="/comics">
          <a className={linkClassName("comics") + " mr-3"}>Comics</a>
        </Link>
        <Link href="/events">
          <a className={linkClassName("events") + " mr-3"}>Events</a>
        </Link>
      </div>
      <div
        className={`mobile-nav-container custom-black-bg ${
          mobileNavExpanded ? "block swipe-down" : "hidden swipe-up"
        }`}
      >
        <div className="relative">
          <span onClick={() => setMobileNavExpanded(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#68768f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="flex flex-col justify-start items-baseline mobile-nav-content">
            <Link href="/">
              <a className={linkClassName("/")}>Characters</a>
            </Link>
            <hr />
            <Link href="/comics">
              <a className={linkClassName("comics")}>Comics</a>
            </Link>
            <hr />
            <Link href="/events">
              <a className={linkClassName("events")}>Events</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="mobile-nav relative">
        <span
          onClick={() => setMobileNavExpanded(true)}
          className="cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#68768f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Nav;
