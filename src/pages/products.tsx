import ProductList from "@/components/ProductList";
import { ProductInterface, fetchProducts } from "@/services/getProducts";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Container } from "reactstrap";

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
};

const Products = (props: { products: ProductInterface[] }) => {
  return (
    <>
      <Head>
        <title>Nossos produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
      </Head>
      <Container className="mb-5">
        <h1 className="my-5">Nossos produtos</h1>
        <ProductList products={props.products} />
      </Container>
    </>
  );
};
export default Products;
