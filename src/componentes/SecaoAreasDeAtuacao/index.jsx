'use client'
import React, { useState, useRef } from "react";

// importando coleção
import { descricoes } from "@/data/dataProjetos";

import Link from "next/link";
import Card from "../Card";
import estilos from "./SecaoAreasDeAtuacao.module.css"
import CardDescricao from "@/componentes/CardDescricao";


// Importando ícones
import { FcGlobe, FcLinux, FcVoicePresentation } from "react-icons/fc";

export default function SecaoAreasDeAtuacao({tema}){

// criando um state para inserir um componente
const [descricaoAtiva, setDescricaoAtiva] = useState(false);

// Criando um state para escolher a descriçao que será buscada no componente CardDescricao
const [escolherDescricao, setEscolherDescricao] = useState();

// função para ativar o componente descrição
const buscarDescricoes = descricoes.filter((desc) => desc.id == escolherDescricao)

// criando uma funcao de insercao de descricao - o componente CardDescricao
function inserirDescricao(event, id){
    event.preventDefault()
    
    setEscolherDescricao(id)

    if(descricaoAtiva === true) {
        setDescricaoAtiva(false)
    }else {
        setDescricaoAtiva(true)

        setTimeout(
        () => {
            console.log('settimeout')
            setDescricaoAtiva(false);
        }, 60000
    );
    };

};

    return(
        <section id="sectionAreasDeAtuacao" className={`${estilos.containerSection} ${tema ? 'darkMode': ''}`}>
            <div className={estilos.boxTexto}>
                <h2>Áreas de Atuação</h2>
                <p>Já são quase 30 anos no mercado de Tecnologia, sempre empenhado em fornecer o que o cliente precisa, focado em entregar resultados que impactem positivamente cada projeto.</p>
            </div>
            <div className={estilos.containerCards}>

                <Link id="1" href="#" onClick={(e) => inserirDescricao(e, 1 )} className={estilos.linkAreas} title="Clique e saiba mais!" ><Card titulo={'Web Designer'} paragrafo={'Criação de Landing pages e sites institucionais completamente personalizados.'} icone={<FcGlobe className={estilos.icone}/>}/></Link>
                <Link id="2" href="#" onClick={(e) => inserirDescricao(e, 2 )} className={estilos.linkAreas} title="Clique e saiba mais!" ><Card titulo={'Suporte - Redes e Sistemas'} paragrafo={'Instalação e configuração de sistemas operacionais Windows/Linux/ChromeOS. Manutenção preventiva e corretiva.'} icone={<FcLinux className={estilos.icone}/>}/></Link>
                <Link id="3" href="#" onClick={(e) => inserirDescricao(e, 3 )} className={estilos.linkAreas} title="Clique e saiba mais!" ><Card titulo={'Treinamento'} paragrafo={'Treinamento personalizado na medida certa para sua empresa. O que sua equipe precisa?'} icone={<FcVoicePresentation className={estilos.icone}/>}/></Link>
      
            </div>

            <div className={estilos.containerDescricoes}>

               {descricaoAtiva && 
               
               buscarDescricoes.map( (desc) => (
                <CardDescricao 
                    key ={desc.id}
                    area={desc.area}
                    descricao = {desc.descricao}
                />
               ) )}
            

            </div>

        </section>
    );
};