"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Modal() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 h-screen w-full bg-[radial-gradient(circle,_#E07A5F,_#690B22,_#1B4D3E)]">
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
      <Image 
          src="/images/gifLogoModal.gif" 
          alt="Modal Image" 
          width={200} 
          height={200} 
          className="rounded-lg drop-shadow-md"
        />
      </div>
    </div>
  );
}