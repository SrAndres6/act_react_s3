import Link from "next/link";

export default function ProductoPage({ params }) {
  return (
    <main>
      <h1>Producto: {params.id}</h1>
      <p>Descripción simple del producto con ID {params.id}.</p>
      <Link href="/productos">Volver a Productos</Link>
    </main>
  );
}
