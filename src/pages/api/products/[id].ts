import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../../database.json";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const product = products.find((prod) => prod.id === Number(id));
  return res.json(product);
}
