export default function ElectronicosPage() {
  const items = ["Laptop Gamer", "Smart TV", "Auriculares"];
  return (
    <main>
      <h1>Productos &gt; Electrónicos</h1>
      <p>{items.length} productos encontrados</p>
      <ul>{items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
    </main>
  );
}
