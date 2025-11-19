import estilos from "./CardDescricao.module.css"

export default function CardDescricao(props){
    return(
        <article className={estilos.containerArticle}>

            <h3>{props.area}</h3>
            <hr></hr>
            <p>{props.descricao}</p>

        </article>
    );
};