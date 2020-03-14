import {NextApiRequest, NextApiResponse} from "next";
import crypto from "crypto";
import {baseUrl, privateApiKey, publicApiKey} from "../../globals";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { title } = req.query;
    const timestamp = new Date().getTime();
    const hash = crypto
        .createHash("md5")
        .update(timestamp + privateApiKey + publicApiKey)
        .digest("hex");
    const auth = `ts=${timestamp}&apikey=${publicApiKey}&hash=${hash}`;
    const response = await fetch(
        `${baseUrl}/comics${!!title ? `?title=${title}&${auth}` : `?${auth}`}`
    );
    res.json(await response.json());
}
