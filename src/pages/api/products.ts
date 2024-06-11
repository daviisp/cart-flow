import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../database.json";

export default function (req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(products);
}
