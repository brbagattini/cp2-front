// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
      <nav className="DisplayFlex w-full h-20 gap-7 bg-blue-300 text-3xl flex-col md:flex-row">
        <a href="">Link A</a>
        <a href="">Link B</a>
        <a href="">Link C</a>
      </nav>
    </div>
  );
}