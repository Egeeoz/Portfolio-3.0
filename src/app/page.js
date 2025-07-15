import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center pt-4">
      <About />
      <Projects />
    </main>
  );
}
