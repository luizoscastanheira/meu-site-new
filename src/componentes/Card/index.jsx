import estilos from "./Card.module.css";
import Image from "next/image";



export default function Card(props){
    return(
        <article className={estilos.containerCard}>
            <h3>{props.titulo}</h3>
            <p>{props.icone}</p>   
            <p>{props.paragrafo}</p>
        </article>
    );
};