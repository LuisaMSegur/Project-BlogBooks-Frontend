"use client";
import { useRouter } from "next/navigation";


export default function MainContent({sectionAbout, sectionLanzamientos, sectionRecomendation}) {
  const router = useRouter();
  return (
    <main>
{sectionAbout && ( 
  <section id="about" className= "mb-8 h-screen">
        <h2 className={`text-7xl text-center m-18 font-bold ${sectionAbout.text}`}>
          {sectionAbout.title}
        </h2>
        <ul className={`grid grid-cols-3 gap-6 list-none p-5 ${sectionAbout.text}`}>
          <li onClick={() => router.push("/articles")} className="rounded-lg bg-[#E3927C] hover:scale-105 hover:opacity-[80%]">
            <img
              src={sectionAbout.list.imgOne.src}
              alt="Portada de libro"
              className="rounded-t-lg mb-6"
            />
            <h3 className="text-2xl font-semibold p-3 pb-6 flex text-center items-center justify-center">
            {sectionAbout.list.imgOne.title}
            </h3>
          </li>
          <li onClick={() => router.push("/articles")} className="rounded-lg bg-[#E3927C] hover:scale-105 hover:opacity-[80%]">
            <img
              src={sectionAbout.list.imgTwo.src}
              alt="Portada de libro"
              className="rounded-t-lg mb-6"
            />
            <h3 className="text-2xl font-semibold p-3 pb-6 flex text-center items-center justify-center">
            {sectionAbout.list.imgTwo.title}
            </h3>
          </li>
          <li onClick={() => router.push("/articles")} className="rounded-lg bg-[#E3927C] hover:scale-105 hover:opacity-[80%]">
            <img
              src={sectionAbout.list.imgThree.src}
              alt="Portada de libro"
              className="rounded-t-lg mb-6"
            />
            <h3 className="text-2xl font-semibold p-3 pb-6 flex text-center items-center justify-center">
            {sectionAbout.list.imgThree.title}
            </h3>
          </li>
        </ul>
      </section>)}
{sectionLanzamientos && (
  <section id="lanzamientos" className={`grid grid-cols-2 h-screen ${sectionLanzamientos.bgColor}`}>
        <div className="flex flex-col justify-between items-center p-8">
          <h2 className="text-6xl font-bold text-[#FFEEC9] text-center pt-8">
          {sectionLanzamientos.title}
          </h2>
          <p className="text-[#FFEEC9] text-center max-w-[500px]">
           {sectionLanzamientos.subtitle}
          </p>
          <p className="text-[#FFEEC9] text-2xl text-center w-[300px]">
          {sectionLanzamientos.text}
          </p>
          <div className="flex justify-center w-full text-start text-2xl pb-[80px]">
            <p className="pt-[20px] text-[#FFEEC9]">{sectionLanzamientos.link}</p>
            <button className="w-[70px] h-[70px]">
              <img
                src={sectionLanzamientos.icon}
                alt="Zoom"
                className="w-[80px] h-[80px] hover:bg-[#F1E3D3] hover:rounded-full hover:scale-105 hover:opacity-[80%]"
              />
            </button>
          </div>
        </div>
        <img
          src={sectionLanzamientos.imgSrc}
          alt="imagen club de lectura"
          className="w-full h-screen"
        />
      </section>)}
{sectionRecomendation && (
        <section
        id="recomendaciones"
        className={`h-screen bg-[#E3927C] flex flex-col justify-center items-center ${sectionRecomendation.textColor}`}>
        <h2 className="text-7xl text-center p-8 font-bold">
        {sectionRecomendation.title}
        </h2>
        <ul className="grid grid-cols-3 gap-12 list-none p-8">
          <li className="flex justify-center items-center w-[250px] h-[420px]">
            <img
              src={sectionRecomendation.imgOne}
              alt="Portada de libro"
              className="w-[100%] h-[100%]"
            />
          </li>
          <li className="flex justify-center items-center w-[250px] h-[420px]">
            <img
              src={sectionRecomendation.imgTwo}
              alt="Portada de libro"
              className="w-[100%] h-[100%]"
            />
          </li>
          <li className="flex justify-center items-center w-[250px] h-[420px]">
            <img
              src={sectionRecomendation.imgThree}
              alt="Portada de libro"
              className="w-[100%] h-[100%]"
            />
          </li>
        </ul>
      </section>
 )}
    </main>
  );
}
