'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Blackjack Game',
      description:
        'A digital implementation of the classic casino game Blackjack, allowing users to play against a computer dealer in a browser-based environment',
      link: 'https://egeeoz.github.io/Blackjack/',
      github: 'https://github.com/Egeeoz/Blackjack',
      technologies: ['HTML', 'CSS', 'React', 'Typescript'],
    },
    {
      id: 2,
      name: 'Unscramblr',
      description: `A browser based word game where players unscramble daily shuffled words to guess the correct answer, with features like a daily challenge`,
      link: 'https://www.unscramblr.com/',
      github: 'https://github.com/Egeeoz/Unscramblr',
      technologies: [
        'HTML',
        'CSS',
        'React',
        'Typescript',
        'DynamoDB',
        'Serverless',
        'Lambda',
        'CD/CI',
      ],
    },
    {
      id: 4,
      name: 'Previous Portfolio Website',
      description:
        'A personal portfolio website showcasing projects, skills, and contact information',
      link: 'https://github.com/Egeeoz/portfolio-2.0',
      github: 'https://github.com/Egeeoz/portfolio-2.0',
      technologies: ['HTML', 'CSS', 'React', 'CD/CI'],
    },
  ];

  const techColors = {
    HTML: 'bg-orange-500 text-white',
    CSS: 'bg-blue-500 text-white',
    React: 'bg-cyan-400 text-black',
    Typescript: 'bg-blue-600 text-white',
    DynamoDB: 'bg-orange-600 text-white',
    Serverless: 'bg-purple-500 text-white',
    Lambda: 'bg-yellow-500 text-black',
    'CD/CI': 'bg-green-600 text-white',
  };

  return (
    <div className="flex flex-col gap-4 container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center gap-2">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto px-4">
          Here are some of the projects I've worked on. Each project represents
          a unique challenge and showcases different aspects of my development
          skills.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 items-start px-4 sm:px-0">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col group w-full max-w-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 gap-4"
          >
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.name}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="px-4 sm:px-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className={`text-xs ${
                      techColors[tech] || 'bg-gray-500 text-white'
                    } transition-all duration-200 hover:scale-105`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="px-4 sm:px-6">
              <div className="flex gap-2 w-full">
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
