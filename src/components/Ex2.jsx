// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8">
      <div className="DisplayFlex w-full gap-1">
        <div className="px50 bg-red-500"></div>
        <div className="px50 bg-amber-500"></div>
        <div className="px50 bg-green-500"></div>
      </div>
    </div>
  );
}
