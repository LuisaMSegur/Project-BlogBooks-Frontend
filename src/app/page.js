
export default function Home() {
  return <div className="w-full h-screen bg-[radial-gradient(circle,_#E07A5F,_#690B22,_#1B4D3E)]">
    <div className="grid-cols-3 h-screen relative w-full">
      <h1 className="col-span-2 text-8xl font-bold transform -translate-y-50%">
        {"LITERATURA"}
      </h1>
      <span className="absolute right-0 top-1/2 transform -translate-x-0 -translate-y-1/2 rotate-270 origin-center text-8xl font-bold">INSPIRACIÓN</span>
    </div>
  </div>;
}
