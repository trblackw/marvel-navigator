import * as React from "react";
import Layout from "../components/Layout";
import "../styles/index.css";
import CharacterLink from "../components/CharacterLink";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";
import { publicApiKey, baseUrl } from "../globals";
import { Character } from "../types";

interface Props {
  characters: Character[];
}

const Index: NextPage<Props> = ({ characters = [] }) => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Character[]>(characters);

  const initiateSearch = async () => {
    const results = await handleSearch(search);
    // setResults(results.map(({ show }) => show));
  };

  return (
    <Layout>
      <div className="flex flex-row justify-start items-center max-w-lg">
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 block w-2/3 appearance-none leading-normal"
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
      <h1 className="font-bold mt-5 text-2xl text-left">
        Showing results for{" "}
        <span className="text-blue-500 font-bold">{search}</span>
      </h1>
      <ul className="pl-2">
        {results.map(character => (
          <li className="my-3" key={character.id}>
            <CharacterLink id={character.id} title={character.name} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async (): Promise<Props> => {
  const res = await fetch("http://localhost:3000/api/characters");
  const json = (await res.json()) as { data: { results: Character[] } };
  return {
    characters: json.data.results
  };
};

async function handleSearch(search: string = ""): Promise<Character[]> {
  const res = await fetch(`${baseUrl}/characters?apikey=${publicApiKey}`);
  const data = await res.json();
  console.log(data);
  return data.results as Character[];
}

export default Index;
