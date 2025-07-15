import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Projects from '@/components/sections/projects';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center pt-4 pb-4 px-4 sm:px-0">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
