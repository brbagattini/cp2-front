// Ex7 — Dashboard simples com Grid (2 pontos)

// Considerando o layout abaixo, estilize com Tailwind:

// - O cabeçalho ocupa largura total (com título e botão “Logout” alinhados em extremidades).
// - O conteúdo é dividido em 2 colunas no desktop e 1 coluna no mobile.
// - Cada card deve ter borda, sombra e padding

import Ex5 from "../components/Ex5"
import Ex4 from "../components/Ex4"

export default function Ex7() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex7 - Dashboard Simples</h1>
      <header className="w-full h-30 bg-amber-700 DisplayFlex gap-300">
        <h1>Meu Dashboard</h1>
        <button className="DisplayFlex rounded-2xl bg-blue-700 w-2xh h-10 text-white p-0.5 hover:bg-blue-950">Logout</button>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2">
        <Ex4 />
        <Ex4 />
        <Ex4 />
        <Ex4 />
      </main>
    </div>
  );
}
