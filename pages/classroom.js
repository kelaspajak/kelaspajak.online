import Link from 'next/link';
import Image from 'next/image';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';
import Card02 from '@/components/card/Card02';
import Card03 from '@/components/card/Card03';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import App from './_app';

export default function Home() {
  return (
    <Container>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/onedrive-wp.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-semibold text-gray-900">
              OneDrive dan File Perpajakan
              <br className="hidden lg:inline-block" />
              Akses kapapun, dimanapun.
            </h1>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font bg-gradient-to-tl from-gray-50 to-gray-100">
        <div className="container px-0 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -my-4">
            <Card02
              title="Waw"
              description="Build and deploy a modern Jamstack application using the most popular open-source software."
              href="https://react2025.com/"
              icon="react2025"
            />
            <Card02
              title="Waw"
              description="Build and deploy a modern Jamstack application using the most popular open-source software."
              href="https://react2025.com/"
              icon="react2025"
            />
            <Card02
              title="Waw"
              description="Build and deploy a modern Jamstack application using the most popular open-source software."
              href="https://react2025.com/"
              icon="react2025"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="xl:text-6xl text-4xl font-semibold title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <Card03
              title="Card 03"
              description="Build and deploy a modern Jamstack application using the most popular open-source software."
              href="https://react2025.com/"
              icon="react2025"
            />
            <Card03
              title="Card 03"
              description="Build and deploy a modern Jamstack application using the most popular open-source software."
              href="https://react2025.com/"
              icon="react2025"
            />
          </div>
        </div>
      </section>
      <App/>
    </Container>
  );
}
