import React from "react";
import { NextPage } from "next";
import Layout from "../../components/Layout";

interface Props {
  comics: unknown[];
}

const Comics: NextPage<Props> = () => {
  return <Layout>Comics page</Layout>;
};

Comics.getInitialProps = async (): Promise<Props> => {
  const res = await fetch("http://localhost:3000/api/comics");
  const json = await res.json();
  return {
    comics: json.data.results
  };
};

export default Comics;
