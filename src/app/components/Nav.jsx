export default function Nav({buttonColor={}, logo}) {
    return (
    <nav className="w-full flex flex-row">
      <a target="_blank" className="w-1/5">
      <img src={logo} alt="Logo" className="size-32 pl-2" />
    </a>
          <ul className="w-full flex justify-end space-x-4 items-center pr-4">
            <li><a href="#home" className={`flex w-[180px] justify-center p-4 rounded-full ring-2 text-[#FFEEC9] hover:underline ${buttonColor.ring}`} style={buttonColor}>About</a></li>
            <li><a href="#home" className={`flex w-[180px] justify-center p-4 rounded-full ring-2 text-[#FFEEC9] hover:underline ${buttonColor.ring}`} style={buttonColor}>Lanzamientos</a></li>
            <li><a href="#home" className={`flex w-[180px] justify-center p-4 rounded-full ring-2 text-[#FFEEC9] hover:underline ${buttonColor.ring}`} style={buttonColor}>Recomendaciones</a></li>
            <li><a href="#home" className={`flex w-[180px] justify-center p-4 rounded-full ring-2 text-[#FFEEC9] hover:underline ${buttonColor.ring}`} style={buttonColor}>Contacto</a></li>
          </ul>
        </nav>
    )
}
