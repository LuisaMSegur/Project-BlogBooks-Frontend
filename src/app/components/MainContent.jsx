export default function MainContent() {
  return (
    <main>
      <section id="about" className="grid grid-cols-2 h-screen bg-emerald-950">
        <div className="flex flex-col justify-between items-center p-8">
          <h2 className="text-5xl font-bold text-[#FFEEC9] text-center pt-8">
            Club de Lectura
          </h2>
          <p className="text-[#FFEEC9] text-center max-w-[500px]">
            Un espacio para compartir y discutir sobre nuestros libros
            favoritos. Todos los jueves:
          </p>
          <p className="text-[#FFEEC9] text-xl text-center">
            19:30 - 21:00 (hora Col)
          </p>
          <div className="flex justify-around w-full text-start text-2xl pb-[80px]">
            <p className="pt-[20px] text-[#FFEEC9]">Conectate</p>
            <button className="w-[70px] h-[70px]">
              <img
                src="images//icons8-zoom-100.png"
                alt="Zoom"
                className="w-[70px] h-[70px]"
              />
            </button>
          </div>
        </div>
        <img
          src="/images/clubImagen.png"
          alt="imagen club de lectura"
          className="w-full h-screen"
        />
      </section>
      <section id="blog" className="mb-8 h-screen">
        <h2 className="text-5xl text-center m-18 font-bold text-emerald-950">
          Reseñas
        </h2>
        <ul className="grid grid-cols-3 gap-6 list-none p-5 text-emerald-950">
          <li className="bg-[#E3927C] rounded-lg">
            <img
              src="/images/desert.jpg"
              alt="Portada de libro"
              className="rounded-t-lg mb-6"
            />
            <h3 className="text-xl font-semibold p-3 pb-6 flex text-center items-center justify-center">
              Titulo de la reseña del libro tal
            </h3>
          </li>
          <li className="bg-[#E3927C] rounded-lg">
            <img
              src="/images/desert.jpg"
              alt="Portada de libro"
              className="rounded-t-lg mb-6"
            />
            <h3 className="text-xl font-semibold p-3 pb-6 flex text-center items-center justify-center">
              Titulo de la reseña del libro tal
            </h3>
          </li>
          <li className="bg-[#E3927C] rounded-lg">
            <img
              src="/images/desert.jpg"
              alt="Portada de libro"
              className="rounded-t-lg mb-6"
            />
            <h3 className="text-xl font-semibold p-3 pb-6 flex text-center items-center justify-center">
              Titulo de la reseña del libro tal
            </h3>
          </li>
        </ul>
      </section>
      <section
        id="recomendaciones"
        className="h-screen bg-[#E3927C] flex flex-col justify-center items-center"
      >
        <h2 className="text-5xl text-center p-8 font-bold text-emerald-950">
          Recomendaciones
        </h2>
        <ul className="grid grid-cols-3 gap-12 list-none p-8">
          <li className="flex justify-center items-center w-[250px] h-[420px]">
            <img
              src="/images/beloved.png"
              alt="Portada de libro"
              className="w-[100%] h-[100%]"
            />
          </li>
          <li className="flex justify-center items-center w-[250px] h-[420px]">
            <img
              src="images/elInfinitoEnUnJunco.webp"
              alt="Portada de libro"
              className="w-[100%] h-[100%]"
            />
          </li>
          <li className="flex justify-center items-center w-[250px] h-[420px]">
            <img
              src="images/cienAñosdeSoledad.jpeg"
              alt="Portada de libro"
              className="w-[100%] h-[100%]"
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
