import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';



const Introduction = () => {
    const [swiper, setSwiper] = useState(true)

    const [isElectricidad, setIsElectricidad] = useState(true)

    const handleClick = () => { setIsElectricidad(!isElectricidad); };



    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>
                    <button className={`px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl ${isElectricidad ? 'text-emerald-300  hover:shadow-emerald-300/50' : "text-yellow-300  hover:shadow-amber-400/50"}`} onClick={handleClick} >
                        {

                            isElectricidad ? "Developer" : "Electricista"
                        }
                    </button>

                    {
                        isElectricidad ? (
                            <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 text-yellow-300">
                                Como electricista, me dedico a asegurar que las instalaciones eléctricas sean seguras, eficientes y cumplan con las normativas. Mi enfoque es combinar conocimientos técnicos con atención al detalle para ofrecer soluciones eléctricas confiables y de alta calidad que garanticen la seguridad y el bienestar de todos los usuarios.
                            </p>
                        ) : (
                            <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 text-emerald-300">
                                Como desarrollador web, me dedico a asegurar que los sitios y aplicaciones web sean seguros, eficientes y cumplan con las normativas. Mi enfoque es combinar conocimientos técnicos con atención al detalle para ofrecer soluciones web confiables y de alta calidad que garanticen la seguridad y el bienestar de todos los usuarios.
                            </p>

                        )

                    }


                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="/assets/resume/resume.pdf" target="_blank" download="resume.pdf" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver Cv </Link>
                        <Link href="http://wa.me/qr/FKW5AV6OHQHUM1" target="_blank"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </Link>
                        <Link href="/projects" target="_blank"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-amber-400 border-amber-400 rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            trabajos de electricidad
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
