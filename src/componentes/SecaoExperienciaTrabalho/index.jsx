import Card from "../Card";

import estilos from "./SecaoExperienciaDeTrabalho.module.css"

import { FcGlobe, FcLinux, FcVoicePresentation } from "react-icons/fc";

export default function SecaoExperienciaDeTrabalho({tema}){
    return(
        <section id="sectionExperiencia" className={`${estilos.containerSection} ${tema ? 'darkMode': ''}`}>
            <div className={estilos.boxTexto}>
                <h2>Experiências de Trabalho</h2>
                <p>Já são quase 30 anos no mercado de Tecnologia, sempre empenhado em fornecer o que o cliente precisa, focado em entregar resultados que impactem positivamente cada projeto.</p>
            </div>
            <div className={estilos.containerCards}>
                <Card titulo={'Web Designer'} paragrafo={'Criação de Landing pages e sites institucionais completamente personalizados.'} icone={<FcGlobe className={estilos.icone}/>}/>
                <Card titulo={'Suporte - Redes e Sistemas'} paragrafo={'Instalação e configuração de sistemas operacionais Windows/Linux/ChromeOS. Manutenção preventiva e corretiva.'} icone={<FcLinux className={estilos.icone}/>}/>
                <Card titulo={'Treinamento'} paragrafo={'Treinamento personalisado na medida certa para sua empresa. O que sua equipe precisa?'} icone={<FcVoicePresentation className={estilos.icone}/>}/>
            </div>
        </section>
    );
};