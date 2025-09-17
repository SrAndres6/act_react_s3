import Link from "next/link";

export default function BlogPage() {
  const articulos = [
    { slug: "introduccion-nextjs", titulo: "Introducción a Next.js" },
    { slug: "react-server-components", titulo: "React Server Components" },
    { slug: "app-router-guia", titulo: "Guía del App Router" },
  ];

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {articulos.map((a) => (
          <li key={a.slug}>
            <Link href={`/blog/${a.slug}`}>{a.titulo}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
