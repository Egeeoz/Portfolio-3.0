'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { TextScramble } from '../../../components/motion-primitives/text-scramble';
import { Avatar } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import goat from '@/img/goat.JPG';
import { Badge } from '../ui/badge';

const About = () => {
  const titles = [
    'Fullstack Developer',
    'Javascript Developer',
    'Frontend Developer',
    'Backend Developer',
  ];

  const skills = [
    'HTML & CSS',
    'Javascript',
    'Typescript',
    'React',
    'Next.js',
    'Tailwind',
    'Node.js',
    'Express',
    'Edge Functions',
    'Cloud Functions',
    'DynamoDB',
    'Firestore',
    'Supabase',
    'Figma',
    'UI/UX Principles',
  ];

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [triggerScramble, setTriggerScramble] = useState(false);

  const badgeVariants = ['default', 'secondary', 'destructive', 'outline'];

  const badgeColors = [
    'bg-blue-500 text-white hover:bg-blue-600',
    'bg-green-500 text-white hover:bg-green-600',
    'bg-purple-500 text-white hover:bg-purple-600',
    'bg-orange-500 text-white hover:bg-orange-600',
    'bg-pink-500 text-white hover:bg-pink-600',
    'bg-indigo-500 text-white hover:bg-indigo-600',
    'bg-yellow-500 text-black hover:bg-yellow-600',
    'bg-teal-500 text-white hover:bg-teal-600',
    'bg-red-500 text-white hover:bg-red-600',
    'bg-cyan-500 text-white hover:bg-cyan-600',
    'bg-violet-500 text-white hover:bg-violet-600',
    'bg-emerald-500 text-white hover:bg-emerald-600',
    'bg-rose-500 text-white hover:bg-rose-600',
    'bg-slate-500 text-white hover:bg-slate-600',
    'bg-amber-500 text-black hover:bg-amber-600',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => {
        const currentIndex = titles.indexOf(prev);
        return titles[(currentIndex + 1) % titles.length];
      });
      setTriggerScramble((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex justify-center items-center w-2/4 mx-auto gap-2">
      <CardHeader className="flex flex-col items-center text-center w-full">
        <Avatar className="w-60 h-60">
          <Image
            src={goat.src}
            className="object-cover"
            alt="Profile Picture"
            width={240}
            height={240}
            quality={100}
          />
        </Avatar>
        <CardTitle className="flex flex-col gap-1 justify-center items-center pb-1">
          <h1 className="text-lg">Ege Özakdemir</h1>
          <div className="w-46 text-center max-h-3.5">
            <TextScramble trigger={triggerScramble}>
              {currentTitle}
            </TextScramble>
          </div>
        </CardTitle>
        <CardDescription className="mb-4">
          24 year old working as fullstack dev at We Know IT, likes to code
        </CardDescription>

        {/* Skills Section */}
        <div className="flex flex-wrap gap-2 justify-center max-w-3/4">
          {skills.map((skill, index) => (
            <Badge
              key={skill}
              variant={badgeVariants[index % badgeVariants.length]}
              className={`${
                badgeColors[index % badgeColors.length]
              } transition-all duration-200 hover:scale-105 cursor-pointer`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
};

export default About;
