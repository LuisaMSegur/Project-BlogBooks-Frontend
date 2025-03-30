import Nav from "@/app/components/Nav";
import Header from "@/app/components/Header";
import MainContent from "@/app/components/MainContent";
import Footer from "@/app/components/Footer";

export default function LiteraturePage() {
  return (
    <div className="font-[merienda] flex flex-col min-h-screen bg-[#E07A5F]">
      <Nav />
      <Header title="Literatura" subtitle="Mis libros y películas favoritas. Unete a nuestro club de lectura, danos a conocer tu opinión mediante reseñas y mucho mas" bgImage="/images/libritos.jpg"/>
      <MainContent />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
