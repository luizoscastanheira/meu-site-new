import Image from "next/image";
import Link from "next/link";

import Eu from "../../../public/eu.jpg";

import estilos from "./SecaoSobre.module.css"

export default function SecaoSobre(){
    return(
        <section id="Sobre" className={estilos.containerSection}>
            
            <div className={estilos.containerTexto}>
                <h2>Ola! Eu sou Luiz Otávio.</h2>
                <p>Sou um Desenvolvedor Full Stack, graduado em Análise e Desenvolvimento de Sistemas pela Universidade de Vassouras, em Abril de 2025. Possuo sólido Background em Infraestrutura de TI (Administração de Sistemas Operacionais, Redes e Suporte Técnico) desenvolvido ao longo de 30 anos, o que proporciona uma visão holística e profunda da arquitetura de software, hardware e deployments. 
                </p>
                
                <p>Estou ativamente imerso no domínio das tecnologias Front-end e Back-end. Minha vantagem competitiva reside na fluidez para transitar entre o código e a infraestrutura subjacente. Sou um profissional altamente motivado e com a disciplina do aprendizado autodidata e o rigor da formação acadêmica, focado em entregar soluções completas e com um compromisso inegociável com a resolução de problemas.</p>

                <div className={estilos.containerLinks}><Link href="https://www.linkedin.com/in/luiz-ot%C3%A1vio-da-silva-castanheira-19683696/" target="_blank" className={estilos.linkSobre}>Ver LinkedIn</Link> <Link href="https://github.com/luizoscastanheira" target="_blank" className={estilos.linkSobre}>Ver GitHub</Link></div>
                
            </div>

            <Image className={estilos.imageLosc} src={Eu} alt="Fotografia de Luiz Otávio "/>
                        
        </section>
    );
};