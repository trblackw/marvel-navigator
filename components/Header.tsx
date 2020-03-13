import * as React from "react";
import Link from "next/link";
// @ts-ignore
import marvelComicLogo from '../assets/marvel-comic-logo.svg';

const Header = () => (
  <div className="mb-3 flex flex-row justify-between items-center w-full">
    <img src={marvelComicLogo} alt="marvel comic logo" style={{ height: 80 }} />
    <div>
      <Link href="/">
        <a className="cursor-pointer mr-2">Home</a>
      </Link>
      <Link href="/about">
        <a className="cursor-pointer mr-2">About</a>
      </Link>
    </div>
  </div>
);

export default Header;
