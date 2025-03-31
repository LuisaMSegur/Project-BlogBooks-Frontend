import Nav from "@/app/components/Nav";
import Header from "@/app/components/Header";
import MainContent from "@/app/components/MainContent";
import VideosSection from "../components/VideosSection";
import Footer from "@/app/components/Footer";

export default function LiteraturePage() {
  return (
    <div className="font-[Kdam_Thmor_Pro] flex flex-col min-h-screen bg-[#F1E3D3]">
      <Nav logo={"/images/VAgif.gif"} buttonColor={{ backgroundColor: "#690B22", ring: "ring-[#8A1330]/70" }}/>
      <Header textColor={"text-[#690B22]"} title="INSPIRACIÓN" subtitle="Mis libros y películas favoritas. Unete a nuestro club de lectura, danos a conocer tu opinión mediante reseñas y mucho mas" bgImage="/images/desert.jpg"/>
      <MainContent 
      sectionLanzamientos={
        {
          bgColor: "bg-[#690B22]",
          imgSrc: "/images/mozart.png",
          title: "Inspiración vs. Motivación",
          subtitle: "Sobre motivación vs. inspiracion. ¿Qué es la inspiración?",
          text: "Proximamente",
          link: "Conexión por zoom, haz click --->",
          icon: "/images/icons8-zoom-100.png",
        }
      }
      />
<VideosSection />
      <Footer bgColor={"bg-[#690B22]"} />
    </div>
  );
}