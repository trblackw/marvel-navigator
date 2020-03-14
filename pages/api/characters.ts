import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { baseUrl, privateApiKey, publicApiKey } from "../../globals";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, id } = req.query;
  const timestamp = new Date().getTime();
  const hash = crypto
    .createHash("md5")
    .update(timestamp + privateApiKey + publicApiKey)
    .digest("hex");
  const auth = `ts=${timestamp}&apikey=${publicApiKey}&hash=${hash}`;
  let url = `${baseUrl}/characters`;
  if (name) {
    url = url.concat(`?name=${name}&${auth}`);
  } else if (id) {
    url = url.concat(`/${id}?${auth}`);
  } else {
    url = url.concat(`?${auth}`);
  }
  const response = await fetch(url);
  res.json(await response.json());
};
