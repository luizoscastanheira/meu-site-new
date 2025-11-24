import Image from "next/image";
import Link from "next/link";

import estilos from "./SecaoFormacao.module.css";

// Importando imagens
import Algoritmo from "../../../public/alg.png";
import Requisitos from "../../../public/levantamento.png";
import Node from "../../../public/node.png";
import rest from "../../../public/rest144.png";
import HTML5 from "../../../public/icons8-html-logo-144.png";
import CSS3 from "../../../public/icons8-css-logo-144.png";
import JS from "../../../public/icons8-javascript-144.png";
import REACT from "../../../public/icons8-react-144.png";
import MYSQL from "../../../public/icons8-mysql-logo-144.png";

export default function SecaoFormacao(){

// Função para abir uma janela popup com o certificado
function abrirJanela(url){
    window.open(url, "Certificado", "popup=1");
}


    return(
        <section id="secaoFormacao" className={estilos.containerSection}>
            <h2>Formação Acadêmica e Profissional</h2>
            <div className={estilos.containerTexto}>
                <h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
                <small>Universidade de Vassouras - 2025</small>
                <p>Focado no desenvolvimento, implementação e gerenciamento de aplicações de software em geral, aplicativos web, e-commerces, além de promover a segurança dos sistemas.</p>

                <h3>Programador Front-End</h3>
                <small>DevMedia</small>
                <p>Formação front-end  DevMedia foca no profissional responsável por implementar a interface de usuário (UI) de um site ou aplicação, ou seja, tudo o que o usuário vê e interage diretamente no navegador. <b>- Tecnologias HTML / CSS / JavaScript / React / API's.</b> </p>

                <h3>Programador Back-End</h3>
                <small>DevMedia</small>
                <p>Um programador back-end é o profissional responsável pela lógica, funcionalidade e infraestrutura que funciona nos bastidores de um site ou aplicação, ou seja, tudo o que o usuário não vê diretamente. <b>- Tecnologias JavaScript - Node.js - API's / Banco de Dados - MySQL - MariaDB.</b></p>
            </div>
            <h2>Tecnologias</h2>
            <p>Clique em uma das imagens logo abaixo para saber meu grau de conhecimento na respectiva tecnologia:</p>
            <div className={estilos.containerImagens}>

                <a onClick={()=> abrirJanela("https://www.devmedia.com.br/certificado/tecnologia/html/luiz-otavio-da-silva-castanheira")} title="Clique para ver o certificado."><Image className={estilos.Imagem} src={HTML5} alt="Imagem logo Html 5." /></a>
                <a onClick={()=> abrirJanela("https://www.devmedia.com.br/certificado/tecnologia/css/luiz-otavio-da-silva-castanheira")} title="Clique para ver o certificado."><Image className={estilos.Imagem} src={CSS3} alt="Imagem logo Requisitos" /></a>
                <a onClick={()=> abrirJanela("https://www.devmedia.com.br/certificado/tecnologia/javascript/luiz-otavio-da-silva-castanheira")} title="Clique para ver o certificado." ><Image className={estilos.Imagem} src={JS} alt="Imagem logo Requisitos" /></a>
                <a onClick={()=> abrirJanela("https://www.devmedia.com.br/certificado/tecnologia/react/luiz-otavio-da-silva-castanheira")}  title="Clique para ver o certificado."><Image className={estilos.Imagem} src={REACT} alt="Imagem logo Requisitos" /></a>
                <a onClick={()=> abrirJanela("https://www.devmedia.com.br/certificado/tecnologia/mysql/luiz-otavio-da-silva-castanheira")}  title="Clique para ver o certificado"><Image className={estilos.Imagem} src={MYSQL} alt="Imagem logo Requisitos" /></a>
                
            </div>
        </section>
    );
};