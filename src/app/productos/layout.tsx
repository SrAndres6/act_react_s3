import Link from "next/link";

export default function ProductosLayout({ children }) {
  return (
    <section>
      <h2>Sección de Productos</h2>
      <nav>
        <Link href="/productos/electronicos">Electrónicos</Link> |{" "}
        <Link href="/productos/ropa">Ropa</Link>
      </nav>
      <div>{children}</div>
    </section>
  );
}
