"use client";
import Nav from "@/app/components/Nav";
import ButtonHome from "@/app/components/ButtonHome";
import Header from "@/app/components/Header";
import MainContent from "@/app/components/MainContent";
import Footer from "@/app/components/Footer";

export default function LiteraturePage() {
  return (
    <div className="font-[merienda] flex flex-col min-h-screen bg-[#E07A5F]">
      <Nav logo={"/images/VAgifVerde.gif"} buttonColor= "bg-[#002c22] hover:bg-[#E07A5F] ring-[#1B4D3E]/70" />
      <ButtonHome color="bg-[#E3927C] hover:bg-[#E07A5F] ring-[#1B4D3E]/70"  />
      <Header textColor={"text-[#002c22]"} title="LITERATURA" subtitle="Mis libros y películas favoritas. Unete a nuestro club de lectura, danos a conocer tu opinión mediante reseñas y mucho mas" bgImage="/images/libritos.jpg"/>
      <MainContent 
      sectionAbout={{
        text: "text-[#002c22]",
        title: "Reseñas",
        list: {
          imgOne: {
            src: "/images/libritos.jpg",
            title: "titulo de reseña",
          },
          imgTwo: {
            src: "/images/libritos.jpg",
            title: "titulo de reseña",
          },
          imgThree: {
            src: "/images/libritos.jpg",
            title: "titulo de reseña",
          },
        }
      }}
      sectionLanzamientos={
        {
          bgColor: "bg-[#002c22]",
          imgSrc: "/images/clubImagen.png",
          title: "Club de Lectura",
          subtitle: "Mis libros y películas favoritas. Unete a nuestro club de lectura, danos a conocer tu opinión mediante reseñas y mucho mas.Conectate con nosotros todas las semanas",
          text: "Jueves 19:30hs - 21:30hs (hora Colombia)",
          link: "Conexión por zoom, haz click --->",
          icon: "/images/icons8-zoom-100.png",
        }
      }
      sectionRecomendation={{
        textColor: "text-[#002c22]",
        title: "Recomendaciones",
        imgOne: "/images/cienSoledad.jpeg",
        imgTwo: "/images/beloved.png",
        imgThree: "/images/elInfinitoEnUnJunco.webp",
      }}
      />
      <Footer bgColor={"bg-[#002c22]"} />
    </div>
  );
}
