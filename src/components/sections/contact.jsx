'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactDetails = {
    email: 'ozakdemirege@hotmail.com',
    phone: '072 018 25 03',
    location: 'Stockholm, Sweden',
    githubUrl: 'https://github.com/Egeeoz',
    linkedinUrl: 'https://www.linkedin.com/in/ege-%C3%B6zakdemir-4422b8313/',
  };

  return (
    <div className="flex justify-center items-center w-full px-0">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center px-0">
          <CardTitle className="text-2xl">Contact Me</CardTitle>
          <CardDescription>
            Get in touch or find me on other platforms.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-sm">
            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-muted-foreground" />
              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:underline"
              >
                {contactDetails.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-muted-foreground" />
              <span>{contactDetails.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-muted-foreground" />
              <span>{contactDetails.location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-0">
          <div className="flex w-full justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(contactDetails.githubUrl, '_blank')}
              aria-label="GitHub Profile"
              className="w-10 h-10"
            >
              <Github />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(contactDetails.linkedinUrl, '_blank')}
              aria-label="LinkedIn Profile"
              className="w-10 h-10"
            >
              <Linkedin />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Contact;
