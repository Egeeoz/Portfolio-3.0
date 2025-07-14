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

const About = () => {
  const titles = [
    'Fullstack Developer',
    'Javascript Developer',
    'Frontend Developer',
    'Backend Developer',
  ];

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [triggerScramble, setTriggerScramble] = useState(false);

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
    <Card className="w-full border-0 h-screen">
      <CardHeader>
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
        <CardTitle className="flex gap-1">
          Ege Özakdemir -
          <TextScramble trigger={triggerScramble}>{currentTitle}</TextScramble>
        </CardTitle>
        <CardDescription>I like to code</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default About;
