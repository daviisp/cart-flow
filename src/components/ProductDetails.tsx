import { useCart } from "@/hooks/useCart";
import { ProductInterface } from "@/services/getProducts";
import Image from "next/image";
import { Button, Col, Row } from "reactstrap";

interface ProductDetailsProps {
  product: ProductInterface;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { addProduct } = useCart();
  return (
    <Row>
      <Col lg={6}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={500}
          width={600}
        />
      </Col>

      <Col lg={6}>
        <h1>{product.name}</h1>

        <h2 className="text-muted">R$ {product.price}</h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {product.description}
        </p>

        <p className="text-muted">Em estoque: {product.inStock}</p>

        <Button
          color="dark"
          className="my-3 pb-2"
          onClick={() => addProduct(product)}
        >
          Compre agora
        </Button>
      </Col>
    </Row>
  );
};
export default ProductDetails;
