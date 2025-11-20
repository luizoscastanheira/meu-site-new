import estilos from "./CardProjetos.module.css";
import Image from "next/image";

export default function CardProjetos(props){
    return(
        <article className={estilos.containerCard}>
           
            <h3>{props.titulo}</h3>
            <Image src={props.imagem} alt={props.titulo}/>   
            <p>{props.paragrafo}</p>
            <a className={estilos.linkExterno} href={props.endereco} target="_blank">Clique aqui para Visualizar</a>
            
        </article>
    );
};