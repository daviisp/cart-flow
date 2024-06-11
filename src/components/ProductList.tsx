import { ProductInterface } from "@/services/getProducts";
import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: ProductInterface[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Row className="g-5">
      {products.map((product) => (
        <Col md={6} lg={4} xl={3} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
export default ProductList;
