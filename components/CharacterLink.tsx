import React, { ReactNode } from "react";
import Link from "next/link";

interface Props {
  id: number;
  children: ReactNode;
}

const CharacterLink: React.FC<Props> = ({ id, children }) => (
  <Link href="/characters/[id]" as={`/characters/${id}`}>
    {children}
  </Link>
);

export default CharacterLink;
