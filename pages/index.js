import Link from 'next/link';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Divider from '@/components/Divider';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Olá, eu sou Renan Gabriel
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-2">
          Eu sou desenvolvedor e criador de conteúdos. Eu trabalho na Leadster
          como Desenvolvedor web. E também sempre estou experimentando e testando
          novas tecnologias e produzindo conteúdos sobre o que já aprendi.
        </h2>
      </div>
    </Container>
  );
}
