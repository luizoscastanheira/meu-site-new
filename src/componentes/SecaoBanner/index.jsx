import estilos from "./SecaoBanner.module.css";

export default function SecaoBanner(){
    return(
        <section className={estilos.containerSection}>
            <div className={estilos.boxImagem}></div>
            <div className={estilos.boxTexto}>
                <p>Design / UI / UX / Tecnologia</p>
                <h2>Fornecedor de Tecnologia</h2>
                <span>e Desenvolvimento Web</span>
            </div>
        </section>
    );
};