export default function DocsPage({ params }) {
  const { slug } = params;
  const breadcrumb = slug?.length ? slug.join(" > ") : "Inicio";

  return (
    <main>
      <h1>Documentación: {breadcrumb}</h1>
      <p>Ruta capturada: {slug ? "/" + slug.join("/") : "/docs"}</p>
      <p>Breadcrumbs: Docs &gt; {breadcrumb}</p>
    </main>
  );
}
