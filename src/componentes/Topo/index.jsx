import Image from "next/image";
import Link from "next/link";
import { LuSun, LuMoon } from "react-icons/lu";

import Globo from "../../../public/globe.svg"

import estilos from "./Topo.module.css";

export default function Topo({tema, funcao}){


    return(
        <header id="topo" className={`${estilos.containerTopo} ${tema ? 'darkMode' : ''} `}>

            <Image className={estilos.imgTopo} src={Globo} alt="imagem de um globo" />
            <nav className={estilos.navTopo}>
                <Link className={estilos.navLink}  href="#secaoSobre">Sobre</Link>
                <Link className={estilos.navLink}  href="#secaoProjetos">Projetos</Link>
                <Link className={estilos.navLink}  href="#secaoAreasDeAtuacao">Áreas de Atuação</Link>
                <Link className={estilos.navLink}  href="#secaoFormacao">Formação</Link>
                <Link className={estilos.navLink}  href="#secaoRodape">Contato</Link>
            </nav>
            <button className={estilos.botaoTopo} onClick={funcao} title="Alternar Tema Claro / Tema Escuro.">{tema ? < LuSun className={estilos.iconeTopo} /> : <LuMoon className={estilos.iconeTopo} />}</button>

        </header>
    );
};