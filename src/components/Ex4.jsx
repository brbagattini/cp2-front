// Ex4 — Card responsivo
import Ex1 from "../components/Ex1"
// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
      <div className="bg-amber-800 w-full md:w-60 h-80 flex DisplayFlex flex-col border-4 border-double border-b-blue-900 rounded-2xl shadow-2xl shadow-black">
        <h1 className=" font-bold text-3xl ">Titulo</h1>
        <p className=" text-2xl">Algo random</p>
        <Ex1 />
      </div>
    </div>
  );
}