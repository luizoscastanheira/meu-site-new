import Link from "next/link";
import Image from "next/image";

import estilos from "./SecaoProjetos.module.css";
import CardProjetos from "../CardProjetos";

// Importando Imagens
import Padaria from "../../../public/sitePadaria320px.png";
import Clinica from "../../../public/siteClinica300px.png";
import Agencia from "../../../public/siteAgencia300px.png";
import Sorveteria from "../../../public/siteSorveteria300px.png";
import Receita from "../../../public/siteReceitaDeBolo300px.png";
import Imobiliaria from "../../../public/siteImobiliaria300px.png";
import Hospedagem from "../../../public/siteHospedagem300px.png";
import PetBoutique from "../../../public/sitePetBoutique300px.png";
import Cafeteria from "../../../public/siteCafeteria300px.png";
import Pousada from "../../../public/sitePousada300px.png";
import Cardapio from "../../../public/siteCardapio300px.png";
import Denise from "../../../public/siteDenise300px.png";
import FrontFatos from "../../../public/siteFrontApiFatos.png";
import apiFatos from "../../../public/apiFatosHistoricos.png";


export default function SecaoProjetos(){
    return(
        <section id="secaoProjetos" className={estilos.containerSection}>

            <h2>Projetos</h2>
            <div className={estilos.containerCards}>
                <CardProjetos titulo={'Espaço Denise Werneck'} imagem={Denise} paragrafo={'Site oficial do centro de Estética Denise Werneck, desenvolvido em React e componentes.'} endereco={'https://espacodenisewerneck.vercel.app/'}/>    
            </div>
            
            <h2>Projetos Acadêmicos - Front-End</h2>
            <div className={estilos.containerCards}>
                <CardProjetos titulo={'Manhattan - Coffe House'} imagem={Cafeteria} paragrafo={'Um site desenvolvido em React e componentes.'} endereco={'https://testecafeteria.netlify.app/'}/>
                <CardProjetos titulo={'Sorveteria Artesanal'} imagem={Sorveteria} paragrafo={'Um site desenvolvido em React e componentes.'} endereco={'https://testesorveteria.netlify.app/'}/>
                <CardProjetos titulo={'Restaurant'} imagem={Cardapio} paragrafo={'Um site com um cardápio interativo desenvolvido em react e componentes.'} endereco={'https://projeto-cardapio-one-mocha.vercel.app/'}/>
            </div>

            <h2>Projetos Front/Back e API</h2>
            <div className={estilos.containerCards}>
                <CardProjetos titulo={'Front-End Api Fatos Históricos'} imagem={FrontFatos} paragrafo={'Um site simples em HTML/CSS/JS que consome uma API - Fatos Históricos - Criada por mim.'} endereco={'https://frontapifatoshistoricos.netlify.app/'}/>
                <CardProjetos titulo={'Back-End API Fatos Históricos'} imagem={apiFatos} paragrafo={'Uma API simples feita JS/Node e hospedada no render.com'} endereco={'https://github.com/luizoscastanheira/apiFatosHistoricos'}/>
            </div>

        </section>
    );
};