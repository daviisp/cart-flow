export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
  quantitiy: number;
}

export async function fetchProducts() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/products`
  ).then((res) => res.json());
  return products;
}

export async function fetchProduct(id: number | string) {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`
  ).then((res) => res.json());
  return product;
}
