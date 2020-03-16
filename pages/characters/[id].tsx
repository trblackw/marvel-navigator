import * as React from "react";
import Layout from "../../components/Layout";
import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import { Character as CharacterType } from "../../types";
import { convertTimeStamp, renderImage, toPascalCase } from "../../utils";
import Link from "next/link";

interface Props {
  character: CharacterType;
}

const Character: NextPage<Props> = ({ character }) => {
  return (
    <Layout>
      <h3 className="marvel-font uppercase mt-4 text-5xl tracking-wide">
        {character.name}
      </h3>

      <div className="container custom-black-bg p-8 rounded-md w-full flex flex-row justify-start">
        {character.thumbnail && (
          <img
            src={renderImage({
              image: character.thumbnail
            })}
            className="rounded-md landscape"
            alt={character.name + "'s image"}
          />
        )}
        <div className="ml-5 p-2">
          <h3 className="text-lg">
            <span className="text-gray-400 font-bold">Last updated:</span>{" "}
            {character.modified && convertTimeStamp(character.modified)}
          </h3>
          <div className="flex flex-row justify-start items-center">
            <ul className="pipe-separated-link-list">
              {character.urls.map(({ type, url }, i) => (
                <li key={i}>
                  <a href={url} className="text-sm">
                    {toPascalCase(type)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5 font-thin leading-loose">
            {character.description}
          </p>
        </div>
      </div>
      <div className="container mt-6 custom-black-bg p-5 rounded-md">
        {character.series.available > 0 && (
          <>
            <h3 className="text-2xl font-bold text-gray-400 block">
              Series{" "}
              <span className="text-sm ml-1 text-red-400">
                {character.series.available}
              </span>
            </h3>
            <div className="mt-3 ml-3">
              <ul className="list-none character-detail-list">
                {character.series.items.map(({ resourceURI, name }, i) => (
                  <li key={i} className="my-3 text-md">
                    <Link href={"#"}>
                      <a>{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

Character.getInitialProps = async ({
  query
}: NextPageContext): Promise<Props> => {
  const res = await fetch(
    `http://localhost:3000/api/characters?id=${query.id}`
  );
  console.log(res);
  const json = (await res.json()) as { data: { results: CharacterType[] } };
  return {
    character: json.data.results[0] as CharacterType
  };
};

export default Character;
