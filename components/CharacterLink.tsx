import React from "react";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
}

const CharacterLink: React.FC<Props> = ({ id, title }) => (
  <Link href="/characters/[id]" as={`/post/${id}`}>
    <a className="text-purple-600 font-bold cursor-pointer">{title}</a>
  </Link>
);

export default CharacterLink;
