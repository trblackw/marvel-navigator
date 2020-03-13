import * as React from "react";
import Layout from "../components/Layout";
import "../styles/index.css";
import CharacterLink from "../components/CharacterLink";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import { useState } from "react";
import { Character } from "../types";
import { renderImage } from "../utils";

interface Props {
  characters: Character[];
}

const Index: NextPage<Props> = ({ characters = [] }) => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Character[]>(characters);
  const [searchFired, setSearchFired] = useState<boolean>(false);

  const initiateSearch = async () => {
    setSearchFired(true);
    setResults(await handleSearch(search));
  };

  return (
    <Layout>
      <div className="flex flex-row justify-start items-center max-w-lg">
        <input
          className="bg-white text-gray-800 focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 block w-2/3 appearance-none leading-normal"
          type="text"
          placeholder="search for a show"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className="bg-red-600 ml-2 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          onClick={initiateSearch}
        >
          Search
        </button>
      </div>
      {searchFired && (
        <h1 className="font-bold mt-5 text-2xl text-left">
          Showing results for{" "}
          <span className="text-blue-500 font-bold">{search}</span>
        </h1>
      )}
      <div className="auto-grid mt-5 custom-black-bg rounded-md mx-auto">
        {results.map(character => (
          <div
            className="my-3 flex flex-col justify-center items-center"
            key={character.id}
          >
            <CharacterLink id={character.id}>
              <>
                <img
                  src={renderImage({
                    image: character.thumbnail,
                    variant: "portrait_fantastic"
                  })}
                  alt={character.name + "'s thumbnail"}
                  className="thumbnail thumbnail-hover-border mb-2"
                />
                <a className="text-md cursor-pointer">{character.name}</a>
              </>
            </CharacterLink>
          </div>
        ))}
      </div>
    </Layout>
  );
};

Index.getInitialProps = async (): Promise<Props> => ({
  characters: await handleSearch()
});

async function handleSearch(name?: string): Promise<Character[]> {
  const res = await fetch(
    `http://localhost:3000/api/characters${name ? `?name=${name}` : ""}`
  );
  const json = (await res.json()) as { data: { results: Character[] } };
  return json.data.results as Character[];
}

export default Index;
