import * as React from "react";
import Layout from "../../components/Layout";
import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import { Character as CharacterType } from "../../types";
import { useRouter } from "next/router";
import { convertTimeStamp, renderImage } from "../../utils";

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
            <span className="text-gray-400 font-bold">Last updated:</span> {" "}
            {character.modified && convertTimeStamp(character.modified)}
          </h3>
        </div>
      </div>
      <p className="px-2 font-thin leading-loose">{character.description}</p>
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
