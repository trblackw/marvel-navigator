import * as React from "react";
import Layout from "../../components/Layout";
import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-unfetch";

interface Props {
  name: string;
  summary: string;
  image?: { medium: string };
}

const Post: NextPage<Props> = ({ name, summary, image }) => (
  <Layout>
    <h3 className="text-gray-800 font-bold text-2xl">{name}</h3>
    <p className="px-2 font-thin leading-loose">
      {summary.replace(/<[/]?[pb]>/g, "")}
    </p>
    {image && <img src={image.medium} alt={name} />}
  </Layout>
);

Post.getInitialProps = async ({ query }: NextPageContext): Promise<Props> => {
  const res = await fetch(`https://api.tvmaze.com/shows/${query.id}`);
  const json = await res.json();
  return { ...json } as Props;
};

export default Post;
