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
        {id:1, area:"Web Designer", descricao: " Um Web Designer é o profissional responsável por conceber e criar a aparência, a estética e a usabilidade (experiência do usuário) de websites e aplicações web. A Landing Page, ou Página de Destino, é uma página de foco total desenhada com o único objetivo de gerar um resultado imediato, como capturar um contato (e-mail e telefone) ou realizar uma venda específica. Ela é um  digital: sem distrações como menus de navegação complexos, ela direciona o visitante de forma agressiva para uma única ação clara (o botão de Comprar ou Baixar Material), garantindo que o investimento em publicidade traga o máximo de retornos em clientes potenciais. Já Site Institucional é a representação oficial e completa da sua empresa na internet. Ele é essencialmente um cartão de visitas digital robusto, otimizado para que o cliente em potencial encontre todas as informações necessárias sobre quem você é, o que você faz e como pode ser contatado, estabelecendo confiança e autoridade."},
        {id:2, area:" Suporte - Redes e Sistemas", descricao: " Suporte Técnico Completo para Seus Equipamentos para que seu computador, seja ele Windows, Linux ou ChromeOS, funcione sempre com a máxima performance. Realizamos instalação do sistema operacional do zero e cuidamos da manutenção (preventiva e corretiva) para resolver problemas rapidamente e evitar que eles voltem a acontecer.O seu sistema sempre atualizado, seguro e funcionando perfeitamente. "},
        {id:3, area:"Treinamento", descricao: "Muitas vezes, a solução para um problema não é um novo hardware ou software, mas sim o conhecimento de como utilizar as ferramentas que você já possui. Treinamentos sob medida onde sua empresa aprende a dominar recursos essenciais e avançados do Windows, Linux ou ChromeOS incluindo configuração de segurança, organização de arquivos e otimização de desempenho. Treinamento prático em suítes como Microsoft 365 (Word, Excel, PowerPoint) e Google Workspace (Docs, Sheets, Slides) com foco em planilhas, apresentações eficazes e organização de documentos. - Palestras curtas sobre boas práticas de navegação, gerenciamento de senhas, reconhecimento de phishing e a importância do backup."},
];

export {projetos, descricoes}