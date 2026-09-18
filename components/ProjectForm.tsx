"use client";

import { useMemo, useState } from "react";

const environments = ["Cozinha","Quarto","Closet","Sala","Área gourmet","Comercial"];
const sizes = ["Até 10 m²","10 a 20 m²","20 a 40 m²","Mais de 40 m²","Não sei informar"];
const needs = ["Projeto completo","Móveis para parte do ambiente","Reformar um planejado existente","Ainda estou pesquisando"];
const deadlines = ["O quanto antes","Até 3 meses","3 a 6 meses","Mais de 6 meses","Sem prazo definido"];
const whatsapp = "559492330654";

export default function ProjectForm() {
  const [step,setStep]=useState(0);
  const [data,setData]=useState({environment:"",size:"",need:"",deadline:"",name:"",phone:""});
  const questions=[
    {title:"Qual ambiente você quer transformar?",key:"environment",options:environments},
    {title:"Qual o tamanho aproximado do ambiente?",key:"size",options:sizes},
    {title:"O que você deseja fazer?",key:"need",options:needs},
    {title:"Quando pretende iniciar seu projeto?",key:"deadline",options:deadlines},
  ] as const;
  const message=useMemo(()=>encodeURIComponent(`Olá, vim pelo site da Novotok e gostaria de iniciar um projeto.

Ambiente: ${data.environment}
Tamanho aproximado: ${data.size}
Interesse: ${data.need}
Prazo: ${data.deadline}
Nome: ${data.name}
WhatsApp: ${data.phone}`),[data]);
  const select=(key:string,value:string)=>{setData(d=>({...d,[key]:value}));setTimeout(()=>setStep(s=>Math.min(s+1,4)),180)};
  return <section id="orcamento" className="planner"><div className="plannerInner">
    <p className="eyebrow">COMECE SEU PROJETO</p>
    <div className="formProgress"><span>ETAPA {step+1} DE 5</span><div><i style={{width:`${((step+1)/5)*100}%`}} /></div></div>
    {step<4 ? <div className="formStage">
      <h2>{questions[step].title}</h2>
      <div className="formOptions">{questions[step].options.map(option=><button key={option} onClick={()=>select(questions[step].key,option)}>{option}<span>→</span></button>)}</div>
    </div> : <div className="formStage">
      <h2>Agora, como podemos falar com você?</h2>
      <p className="formSupport">Preencha seus dados para enviar as informações do projeto diretamente para a Novotok.</p>
      <div className="finalFields"><input value={data.name} onChange={e=>setData(d=>({...d,name:e.target.value}))} placeholder="Seu nome"/><input value={data.phone} onChange={e=>setData(d=>({...d,phone:e.target.value}))} placeholder="Seu WhatsApp"/></div>
      <a className={"sendProject "+(!data.name||!data.phone?"disabled":"")} href={data.name&&data.phone?`https://wa.me/${whatsapp}?text=${message}`:"#"} target={data.name&&data.phone?"_blank":undefined} rel="noreferrer">Solicitar meu projeto <span>→</span></a>
      <small>Ao continuar, você será direcionado para o WhatsApp da Novotok.</small>
    </div>}
    {step>0&&<button className="backStep" onClick={()=>setStep(s=>s-1)}>← Voltar</button>}
  </div></section>
}