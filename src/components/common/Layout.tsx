import Link from "next/link";
import { ReactNode } from "react";
import { Nav, Navbar } from "reactstrap";

interface LayoutProps {
  children?: ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar container="md" color="dark" dark>
        <Link href="/" passHref legacyBehavior>
          <a className="navbar-brand">Início</a>
        </Link>
        <Nav className="flex-row" navbar>
          <Link href="/products" passHref legacyBehavior>
            <a className="nav-link me-5">Produtos</a>
          </Link>
          <Link href="/cart" passHref legacyBehavior>
            <a className="nav-link">Carrinho</a>
          </Link>
        </Nav>
      </Navbar>
      {children}
    </>
  );
};

export default LayoutDefault;
