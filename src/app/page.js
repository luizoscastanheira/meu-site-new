'use client'
import { useState } from "react";
import Link from "next/link";

import estilos from "./page.module.css";

import Topo from "@/componentes/Topo";
import SecaoBanner from "@/componentes/SecaoBanner";
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoExperienciaDeTrabalho from "@/componentes/SecaoExperienciaTrabalho";
import Rodape from "@/componentes/Rodape";

export default function Home() {

  // criando um state
const [temaDark, setTemaDark] = useState(false);
// criando uma função de mudança de tema
function trocarTema(){
    if(temaDark === true){
        setTemaDark(false)
    } else {
        setTemaDark(true)
    }
}

  return (
    <div>
      <Topo tema={temaDark} funcao={trocarTema}/>
      
      <SecaoBanner />

      <SecaoSobre />
      
      <Link className={estilos.linkVoltar} href="#topo" title="Clique para voltar ao topo.">Voltar</Link>

      <SecaoExperienciaDeTrabalho tema={temaDark} />

      <Rodape tema={temaDark}/>
      
    </div>
  );
}
