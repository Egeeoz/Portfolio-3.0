import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import goat from '@/img/goat.JPG';

const About = () => {
  return (
    <Card className="w-full border-0 h-screen">
      <CardHeader>
        <Avatar className="w-60 h-60">
          <AvatarImage src={goat.src} className="object-cover" />
          <AvatarFallback>EÖ</AvatarFallback>
        </Avatar>
        <CardTitle>Ege Özakdemir - Fullstack Developer</CardTitle>
        <CardDescription>I like to code</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default About;
