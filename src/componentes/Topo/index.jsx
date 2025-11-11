'use client';
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { LuSun, LuMoon } from "react-icons/lu";

import Globo from "../../../public/globe.svg"

import estilos from "./Topo.module.css";

export default function Topo({tema, funcao}){


    return(
        <header className={`${estilos.containerTopo} ${tema ? 'darkMode' : ''} `}>

            <Image className={estilos.imgTopo} src={Globo} alt="imagem de um globo" />
            <nav className={estilos.navTopo}>
                <Link href="#sectionExperiencia">Experiencia</Link>
            </nav>
            <button className={estilos.botaoTopo} onClick={funcao}>{tema ? < LuSun className={estilos.iconeTopo} /> : <LuMoon className={estilos.iconeTopo} />}</button>

        </header>
    );
};