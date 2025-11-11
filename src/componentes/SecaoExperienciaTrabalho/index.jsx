import Card from "../Card";

import estilos from "./SecaoExperienciaDeTrabalho.module.css"

export default function SecaoExperienciaDeTrabalho({tema}){
    return(
        <section id="sectionExperiencia" className={`${estilos.containerSection} ${tema ? 'darkMode': ''}`}>
            <div className={estilos.boxTexto}>
                <h2>Experiências de Trabalho</h2>
                <p>Já são quase 30 anos no mercado de Tecnologia, sempre empenhado em fornecer o que o cliente precisa, focado em entregar resultados que impactem positivamente cada projeto.</p>
            </div>
            <div className={estilos.containerCards}>
                <Card titulo={'Web Designer'} paragrafo={'Criação de Landing pages e sites institucionais completamente personalizados.'}/>
                <Card titulo={'Adm de Redes e Sistemas'}/>
            </div>
        </section>
    );
};