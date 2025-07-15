# Portfolio Website

A responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design for mobile and desktop
- Dark theme
- Animated text effects
- Project showcase
- Contact information
- Skills display

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS
- Radix UI Components
- Lucide React Icons
- Motion (Framer Motion)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-3.git
cd portfolio-3
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to your repository on GitHub and navigate to **Settings** > **Pages**

3. Under "Source", select **GitHub Actions**

4. The GitHub Actions workflow will automatically build and deploy your site when you push to the main branch.

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. The static files will be generated in the `out` directory.

3. Upload the contents of the `out` directory to your GitHub Pages repository.

## Project Structure

```
portfolio-3/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── sections/
│   │   │   ├── about.jsx
│   │   │   ├── projects.jsx
│   │   │   └── contact.jsx
│   │   └── ui/
│   └── img/
├── components/
│   └── motion-primitives/
└── public/
```

## Customization

### Adding Projects

Edit `src/components/sections/projects.jsx` to add or modify projects:

```javascript
const projects = [
  {
    id: 1,
    name: 'Project Name',
    description: 'Project description',
    link: 'https://project-url.com',
    github: 'https://github.com/username/project',
    technologies: ['React', 'TypeScript', 'Tailwind'],
  },
];
```

### Updating Contact Information

Edit `src/components/sections/contact.jsx` to update your contact details:

```javascript
const contactDetails = {
  email: 'your-email@example.com',
  phone: 'Your Phone Number',
  location: 'Your Location',
  githubUrl: 'https://github.com/yourusername',
  linkedinUrl: 'https://linkedin.com/in/yourprofile',
};
```

### Modifying Skills

Edit `src/components/sections/about.jsx` to update your skills list:

```javascript
const skills = [
  'HTML & CSS',
  'JavaScript',
  'React',
  // Add more skills...
];
```

## License

This project is open source and available under the [MIT License](LICENSE).
