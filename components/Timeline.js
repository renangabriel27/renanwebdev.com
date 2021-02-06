import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Year>2015</Year>
    <ul>
      <Step title="Calouro">
        Como todo calouro eu percebi no início que teria que estudar bastante
        para ir bem na universidade, como tinha até matéria de álgebra linear.
        Eu acaba indo até no sabádo nas aulas de reforço para tentar passar nessa
        matéria.
      </Step>
      <Step title="Entrei no curso de Tecnologia em Sistemas para Internet - da UTFPR 🏙">
        Fiquei realmente muito feliz nessa época por ter conseguido entrar
        nesse curso, não tinha certeza absoluta se era isso que eu queria.
        Mas sabia que no curso tinha HTML+CSS que eu gostava então vamos lá.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Ganhei uma bolsa 2 semanas antes do ENEM para estudar 🔥">
        Para estudar para a prova em um colégio particular, 2 semanas antes
        do enem. Aqui eu comecei um projeto parecido com do JK do 50 anos em 5 haha.
      </Step>
      <Step title="Terminei o curso de Técnico em Informática">
        Finalmente eu estava livre do ensino médio, e pensando o que
        eu vou fazer com meu futuro?
      </Step>
      <Step title="Apresentei meu projeto final do ensino médio">
        Fiz um mini tcc nessa época, criei um sistema tipo uma loja
        de informática online, feito com php estruturado + bootstrap.
        E os professores realmente gostaram bastante do resultado,
        estudei muito sozinho e aprendi muito sobre HTML + CSS também.
      </Step>
    </ul>
    <Divider />
    <Year>2013</Year>
    <ul>
      <Step title="Iniciei meu primeiro trabalho como estagiário de TI">
        Comecei a trabalhar com meu primo, com suporte técnico
        onde aprendi diversas coisas legais como desmontar e montar um
        computador ou notebook e corrigir eventuais problemas de software
        e formatação de computadores.
      </Step>
    </ul>
    <Divider />
    <Year>2010</Year>
    <ul>
      <Step title="Iniciei o curso Técnico em Informática">
        Entrei no Colégio Estadual Francisco Carneiro Martins, para
        estudar o curso integrado do ensino médio que tinha duração
        de 4 anos. Para se aventurar e aprender mais sobre programação
        e suporte técnico de computadores.
      </Step>
      <Step title="Aprendi como funcionava um algoritmo básico">
        Antes de entrar no curso de técnico em informática, minha prima
        me ensinou a base de toda a programação: algoritmos.
        Eu gostei bastante da ideia dos algoritmos, e decidi que era a
        área que eu deveria continuar.
      </Step>
    </ul>
    <Divider />
    <Year>2003</Year>
    <ul>
      <Step title="Me apaixonei por computadores">
        Lembro de sempre ir na minha prima, e esperar ele deixar eu
        jogar de vez em quando jogos do emulador do super-nintendo
        como super mario, donkey kong, etc.
      </Step>
    </ul>
    <Divider />
    <Year>1996</Year>
    <ul>
      <Step title="Ganhei minha primeira corrida! 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Linha do tempo
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="Entrei na Neurologic 🤘🏻">
          Hoje estou bem empolgado trabalhando na Neurologic a primeira
          plataforma de marketing conversacional do Brasil!
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Graduei na UTFPR">
          Nunca pensei que esse dia ia chegar, depois de 5 anos se lascando...
          realmente valeu a pena me formei na UTFPR da turma de 40 alunos, estavam se
          formando apenas 3.
        </Step>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <Step title="Entrei na Lets 🛒">
          Comecei a trabalhar como desenvolvedor full-stack com php (zend, laravel)
          nessa época, pois já tinha aprendido na facul uma disciplina sobre php
          e como programar usando frameworks.
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
