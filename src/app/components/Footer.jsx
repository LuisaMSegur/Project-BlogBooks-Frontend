import Image from "next/image";

export default function Footer({bgColor}) {
    return (
      <footer className={`text-center text-[#FFEEC9] flex flex-col justify-center items-center ${bgColor}`}>
        <h2 className="text-4xl font-bold p-12 pb-16">Contacto </h2>
       <div className="flex flex-row gap-6 p-4">
        <a href="https://wa.me/1234567890" className="hover:underline">
        <Image src="/images/icons8-whatsapp-100.png" alt="WhatsApp" width={50} height={50} className="inline-block mr-2" /></a>
        
        <a href="https://instagram.com/yourprofile" className="hover:underline">
        <Image src="/images/icons8-instagram-100.png" alt="Instagram" width={50} height={50} className="inline-block mr-2" /></a>
        
        <a href="https://facebook.com/yourprofile" className="hover:underline">
        <Image src="/images/icons8-gmail-nuevo-100.png" alt="Gmail" width={50} height={50} className="inline-block mr-2" /></a>
        </div> 
        <p className="self-start p-4 text-xs pt-16">© 2025 Valentina Seguro Rodriguez</p>
      </footer>
    );
  }