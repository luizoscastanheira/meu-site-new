'use client'
import { useState } from "react";
import Link from "next/link";

import estilos from "./page.module.css";

import Topo from "@/componentes/Topo";
import SecaoBanner from "@/componentes/SecaoBanner";
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoProjetos from "@/componentes/SecaoProjetos";
import SecaoAreasDeAtuacao from "@/componentes/SecaoAreasDeAtuacao";
import Rodape from "@/componentes/Rodape";

export default function Home() {

  // criando um state para tema
const [temaDark, setTemaDark] = useState(false);
// criando uma função de mudança de tema
function trocarTema(){
    if(temaDark === true){
        setTemaDark(false)
    } else {
        setTemaDark(true)
    };
};



  return (
    <div>
      
      <Topo tema={temaDark} funcao={trocarTema}/>
      
      <SecaoBanner />

      <SecaoSobre />
      
      <SecaoProjetos />

      <Link className={estilos.linkVoltar} href="#topo" title="Clique para voltar ao topo.">Voltar</Link>

      <SecaoAreasDeAtuacao tema={temaDark} />
      
      <Rodape tema={temaDark}/>
      
    </div>
  );
}
