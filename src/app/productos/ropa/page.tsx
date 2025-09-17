export default function RopaPage() {
  const items = ["Camisa", "Pantalón", "Chaqueta"];
  return (
    <main>
      <h1>Productos &gt; Ropa</h1>
      <p>{items.length} productos encontrados</p>
      <ul>{items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
    </main>
  );
}
