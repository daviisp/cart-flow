import ProductDetails from "@/components/ProductDetails";
import {
  ProductInterface,
  fetchProduct,
  fetchProducts,
} from "@/services/getProducts";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Container } from "reactstrap";

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  if (typeof id === "string") {
    const product = await fetchProduct(id);
    return {
      props: {
        product,
      },
    };
  }

  return {
    redirect: {
      destination: "/products",
      permanent: false,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products.map((product: ProductInterface) => {
    return { params: { id: product.id.toString() } };
  });

  return { paths, fallback: false };
};

const Product = (props: {
  children?: ReactNode;
  product?: ProductInterface;
}) => {
  return (
    <>
      <Head>
        <title>{props.product!.name}</title>
        <meta name="description" />
      </Head>
      <Container className="mt-5">
        <ProductDetails product={props.product!} />
      </Container>
    </>
  );
};
export default Product;
