/* Base de Dados de teste*/

import Image from "next/image";

// Importando imagens
import Padaria from "../../public/sitePadaria320px.png";
import Clinica from "../../public/siteClinica300px.png";
//import Agencia from "../../../public/siteAgencia300px.png";
//import Otica from "../../../public/siteOtica300px.png";
//import Receita from "../../../public/siteReceitaDeBolo300px.png";
//import Imobiliaria from "../../../public/siteImobiliaria300px.png";
//import Hospedagem from "../../../public/siteHospedagem300px.png";
//import PetBoutique from "../../../public/sitePetBoutique300px.png";
//import Cafeteria from "../../../public/siteCafeteria300px.png";
//import Pousada from "../../../public/sitePousada300px.png";

// dados de projetos
const projetos =[
        {  id:1, titulo: "Receita de Bolo", descricao:"", imagem:Padaria,link:"" },
        {  id:2, titulo:"Clínica", descricao:"", imagem:Clinica, link:"" }
];

// dados de experiencias
const descricoes = [
        {id:1, area:"Web Designer", descricao: ""},
        {id:2, area:"Suporte - Redes e Sistemas", descricao: ""},
        {id:3, area:"Treinamento", descricao: ""},
];

export {projetos, descricoes}