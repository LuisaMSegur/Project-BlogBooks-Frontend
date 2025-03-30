import Nav from "@/app/components/Nav";
import Header from "@/app/components/Header";
import MainContent from "@/app/components/MainContent";
import Footer from "@/app/components/Footer";

export default function InspirationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header title="" subtitle="" bgColor="bg-blue-600" />
      <Nav />
      <MainContent />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}