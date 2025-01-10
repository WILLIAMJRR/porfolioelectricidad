import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-32">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de electricidad especializados en la instalación, mantenimiento y reparación de sistemas eléctricos. Con un enfoque en seguridad y eficiencia, utilizo las últimas tecnologías y herramientas del sector para garantizar que todas las instalaciones eléctricas cumplan con las normativas vigentes. Mi objetivo es proporcionar soluciones eléctricas fiables y de alta calidad que aseguren el correcto funcionamiento y la seguridad de los hogares y negocios de mis clientes, mejorando su bienestar y tranquilidad..</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
