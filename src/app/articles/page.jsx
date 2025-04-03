import Image from "next/image";
import Link from "next/link";

export default function ReseñasPage() {
  return (
    <div className="font-[merienda] bg-[#FFC5B4] min-h-screen flex flex-col">
      <header className="w-full bg-emerald-950 p-4 flex justify-between place-items-center h-[90px]">
      <img src="/images/VAgifVerde.gif" alt="Logo" className="size-24 pl-2" />
      <Link
        href="/literature"
        className="rounded-full ring-2 ring-[#FFAF99] h-12 w-20 text-[#FFAF99] hover:bg-[#FFAF99] hover:text-emerald-950 flex items-center justify-center"
      >
        Volver
      </Link>
    </header>
      <div className="grid grid-cols-3 h-screen w-full text-emerald-950">
        <article className="bg-[#FFAF99] col-span-2 max-w-4xl my-10 mx-[40px] p-6 rounded-lg">
          <h1 className="text-2xl font-bold">Título del Artículo</h1>
          <p className="mt-4">
            Aquí se cargará el contenido del artículo desde la API. Puede ser un
            resumen, texto largo o cualquier otro contenido dinámico.
          </p>
        </article>
        <section>
          <ul className="flex flex-col gap-6 p-6 fixed right-2">
            <li className="rounded-lg bg-[#FFAF99] hover:scale-110 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold p-3 pb-6 flex text-center items-center justify-center hover:underline">
                titulo de otro articulo
              </h3>
            </li>
            <li className="rounded-lg bg-[#FFAF99] hover:scale-110 ">
              <h3 className="text-xl font-semibold p-3 pb-6 flex text-center items-center justify-center hover:underline">
                titulo de otro articulo
              </h3>
            </li>
          </ul>
        </section>
      </div>
      <footer className="text-[#FFEEC9] flex justify-between items-end bg-emerald-950 p-4">
        <p className="text-xs pt-6">© 2025 Valentina Seguro Rodriguez</p>
        <div className="flex flex-row gap-6">
          <a
            href="https://wa.me/1234567890"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <Image
              src="/images/icons8-whatsapp-100.png"
              alt="WhatsApp"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <Image
              src="/images/icons8-instagram-100.png"
              alt="Instagram"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <Image
              src="/images/icons8-gmail-nuevo-100.png"
              alt="Gmail"
              width={50}
              height={50}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
