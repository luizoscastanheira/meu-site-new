'use client'
import { useState } from "react";

import estilos from "./page.module.css";

import Topo from "@/componentes/Topo";
import SecaoBanner from "@/componentes/SecaoBanner";
import SecaoExperienciaDeTrabalho from "@/componentes/SecaoExperienciaTrabalho";

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
      
      <SecaoExperienciaDeTrabalho tema={temaDark} />
      
    </div>
  );
}
