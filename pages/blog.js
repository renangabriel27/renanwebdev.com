import Link from 'next/link';
import Image from 'next/image';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Divider from '@/components/Divider';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          hello world!
        </h1>

        <h2 className="prose text-gray-600 dark:text-gray-400 mb-2">
          Olá, eu sou o Renan Gabriel e trabalho como desenvolvedor web
          na <a href='https://www.leadster.com.br' target="_blank">Leadster</a>.
          Além disso, sempre estou experimentando e testando
          novas tecnologias e produzindo conteúdos sobre o que já aprendi.
        </h2>
      </div>
    </Container>
  );
}
