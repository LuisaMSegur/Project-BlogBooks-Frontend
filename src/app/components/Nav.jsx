export default function Nav() {
    return (
    <nav className="w-full flex flex-row">
      <a target="_blank" className="w-1/5">
      <img src="/images/VAgifVerde.gif" alt="Logo" className="size-32 pl-2" />
    </a>
          <ul className="w-full flex justify-end space-x-4 items-center pr-4">
            <li className=""><a href="#home" className="flex w-[180px] justify-center p-4 bg-emerald-950 rounded-full ring-2 ring-[#1B4D3E]/70 text-[#FFEEC9] hover:underline">About</a></li>
            <li><a href="#about" className="flex w-[180px] justify-center p-4 bg-emerald-950 rounded-full ring-2 ring-[#1B4D3E]/70 text-[#FFEEC9] hover:underline">Lanzamientos</a></li>
            <li><a href="#blog" className="flex w-[180px] justify-center p-4 bg-emerald-950 rounded-full ring-2 ring-[#1B4D3E]/70 text-[#FFEEC9] hover:underline">Recomendaciones</a></li>
            <li><a href="#contact" className="flex w-[180px] justify-center p-4 bg-emerald-950 rounded-full ring-2 ring-[#1B4D3E]/70 text-[#FFEEC9] hover:underline">Contacto</a></li>
          </ul>
        </nav>
    )
}