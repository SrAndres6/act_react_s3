import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a mi sitio con Next.js 13+ 🚀</p>
      <ul>
        <li><Link href="/productos">Ir a Productos</Link></li>
        <li><Link href="/blog">Ir al Blog</Link></li>
        <li><Link href="/contacto">Ir a Contacto</Link></li>
      </ul>
    </main>
  );
}
