// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


import Ex5 from "../components/Ex5"
// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8 h-96 w-full">
      <Ex5 />
      <footer className="DisplayFlex w-full h-20 gap-7 bg-blue-300 text-3xl"></footer>
    </div>
  );
}
