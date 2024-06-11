import { useCart } from "@/hooks/useCart";
import { ProductInterface } from "@/services/getProducts";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";

interface ProductCardProps {
  product: ProductInterface;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addProduct } = useCart();
  return (
    <>
      <Card>
        <Link href={`/products/${product.id}`}>
          <Image
            className="card-img-top"
            src={product.imageUrl}
            alt={product.name}
            height={300}
            width={600}
          />
        </Link>

        <CardBody>
          <Link href={`/products/${product.id}`}>
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              {product.name}
            </h5>
          </Link>

          <CardSubtitle className="mb-3 text-muted" tag={"h6"}>
            R$ {product.price}
          </CardSubtitle>
          <Button
            color="dark"
            block
            className="pb-2"
            onClick={() => addProduct(product)}
          >
            Adicionar ao carrinho
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
export default ProductCard;
