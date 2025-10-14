// Ex1 — Botão estilizado com Tailwind
// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="my-8">
      <button className="DisplayFlex rounded-2xl bg-blue-700 w-2xh h-4r text-white p-0.5 hover:bg-blue-950">Botão datado</button>
    </div>
  );
}