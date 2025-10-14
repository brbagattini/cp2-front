// Ex3 — Grid simples

// Crie um `grid` com 2 colunas e 2 linhas, cada célula com fundo cinza claro e altura fixa de `80px`.

export default function Ex3() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-2 grid-rows-2 h-80 w-80 bg-gray-800 ">
        <div className="w-30 h-30 bg-red-600"></div>
        <div className="w-30 h-30 bg-green-600"></div>
        <div className="w-30 h-30 bg-blue-600"></div>
        <div className="w-30 h-30 bg-yellow-600"></div>
      </div>
    </div>
  );
}