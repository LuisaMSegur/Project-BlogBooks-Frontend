export default function Header({ title, subtitle, bgImage }) {
  return (
    <header className="relative h-screen text-emerald-950 text-center bg-cover bg-no-repeat bg-center flex flex-col justify-start items-center">
      <div 
        className="absolute inset-0"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: "40%" }}
      />
      <div className="relative z-10">
        <h1 className="text-8xl font-bold pt-[80px] pb-[80px]">{title}</h1>
        <h2 className="text-xl w-[650px]">{subtitle}</h2>
      </div>
    </header>
  );
}