export default function VideosSection() {
    return (
      <section id="recomendaciones" className="h-screen">
        <h2 className="text-7xl font-bold text-center text-[#690B22] pt-[80px] pb-[90px]">Videos Recomendados</h2>
        
        <div className="grid grid-cols-2 gap-8 px-10">
          <div className="aspect-video">
          <iframe className="w-full h-full rounded-lg shadow-lg" src="https://www.youtube.com/embed/ThZeEfhs9WA" 
          title="Biciclown: un viaje para descubrir la vida. Álvaro Neil, viajero" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

          </iframe>
          </div>
          <div className="aspect-video">
            <iframe className="w-full h-full rounded-lg shadow-lg" src="https://www.youtube.com/embed/yq4uMOBgQdg" 
            title="Cómo superar tus propios límites | Millán Ludeña | TEDxPUCE" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

            </iframe>
          </div>
        </div>
      </section>
    );
  }