import Image from "next/image";
import Link from "next/link";

import estilos from "./Rodape.module.css";

import { FaLinkedin, FaWhatsappSquare, FaPhoneSquareAlt, FaMailBulk } from "react-icons/fa";


import Logo from "../../../public/logoLoscBRSmall.png";

export default function Rodape({tema}){
    return(
        <footer id="rodape" className={`${estilos.containerFooter} ${tema ? `darkMode` : ''}`}>

            <div className={estilos.containerImgTexto}>
                <Image src={Logo} alt="Imagem do logtipo" className={estilos.imgLogo}/>
                <p>
                    Te ajudo a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas. E todo material criado para seu projeto será sempre seu, sem surpresas.
                </p>
            </div>

            <h4>Entre em contato clicando em um link abaixo:</h4>

            <div className={estilos.containerIcones}>
                <FaLinkedin/> <FaWhatsappSquare/> <FaPhoneSquareAlt/> <FaMailBulk/>
            </div>

            <p className={estilos.contruido}>Contruído por mim em React</p>
        </footer>
    );
};