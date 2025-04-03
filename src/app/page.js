import Image from "next/image";
import Link from "next/link";
import Modal from "./components/Modal";

export default function Home() {
  return <div className="text-[#F1E3D3] h-screen w-full bg-[radial-gradient(circle,_#E07A5F,_#690B22,_#1B4D3E)]">
    <Modal/>
<div className="grid grid-cols-6 h-screen">
  <div className="flex justify-center font-[merienda] items-center col-span-3 ">
            <Link href="/literature" className="h-[150px] flex items-center text-7xl drop-shadow-md hover:text-[#F8CA95]">
              LITERATURA
            </Link>
            </div>
            <div className="flex items-center col-span-1 relative">
            <Image src="/images/gifLibroAbierto.gif" alt="Libro" width={150} height={150}/>
            </div>
          <Link href="/inspiration" className="col-span-2 absolute right-0 top-1/2 -translate-y-1/2 rotate-270 pb-8 text-8xl font-[Kdam_Thmor_Pro] drop-shadow-md hover:text-[#F8CA95]">
            Inspiración
          </Link>
       
          </div>
  </div>;
}
