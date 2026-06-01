# Setup and Usage Instructions

**Version**: 1.0.0
**Last Updated**: 2026-06-01

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Available Commands](#available-commands)
4. [Extending the Application](#extending-the-application)
5. [Pre-rendering Methods](#pre-rendering-methods)
6. [Best Practices](#best-practices)
7. [Documentation](#documentation)
8. [External Resources](#external-resources)
9. [Troubleshooting](#troubleshooting)
10. [Deployment](#deployment)

## Prerequisites

### System Requirements

- **Node.js**: Version 12 or higher (v14+ recommended)
- **Package Manager**: npm or yarn
- **Operating System**: Windows, macOS, or Linux
- **Memory**: 1GB RAM minimum
- **Disk Space**: 200MB for application and dependencies

## Initial Setup

### 1. Install Dependencies

**Using npm:**

```bash
npm install
```

**Using yarn:**

```bash
yarn install
```

### 2. Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies (as shown above)
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

No configuration files are required for basic usage. The blog works out of the box with the following structure:

- Blog posts are stored in the `posts/` directory as Markdown files
- Static assets go in the `public/` directory
- Styles are in the `styles/` directory
- Components are in the `components/` directory

## Available Commands

### Development Commands

**Start development server:**

```bash
npm run dev
```

**Build for production:**

```bash
npm run build
```

**Start production server:**

```bash
npm run start
```

**Stop all Node processes (Windows):**

```bash
npm run stop
```

## Running Scripts

### Development Mode

Starts the Next.js development server with hot reloading:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

Creates an optimized production build:

```bash
npm run build
```

**What it does:**

- Compiles and optimizes all pages
- Generates static HTML for pages using Static Site Generation (SSG)
- Bundles JavaScript and CSS
- Optimizes images and assets

### Start Production Server

Runs the production server (requires build first):

```bash
npm run start
```

### Stop Server (Windows)

Stops all Node.js processes:

```bash
npm run stop
```

**Note:** This command is Windows-specific and kills all node.exe processes.

## File Structure

### Pages (`pages/`)

- `index.js` - Homepage displaying all blog posts
- `posts/[id].js` - Dynamic route for individual blog posts
- `_app.js` - Custom App component for initializing pages
- `api/hello.js` - Example API route

### Components (`components/`)

- `layout.js` - Main layout wrapper with header and navigation
- `date.js` - Date formatting component using date-fns
- `alert.js` - Alert component example
- `*.module.css` - Component-specific CSS modules

### Posts (`posts/`)

Markdown files with frontmatter:

```markdown
---
title: 'Your Post Title'
date: '2020-01-01'
---

Your post content in Markdown format...
```

### Library (`lib/`)

- `posts.js` - Functions for reading and processing Markdown posts:
  - `getSortedPostsData()` - Gets all posts sorted by date
  - `getAllPostIds()` - Gets all post IDs for static path generation
  - `getPostData(id)` - Gets individual post data and converts to HTML

### Styles (`styles/`)

- `global.css` - Global styles
- `utils.module.css` - Utility CSS classes

### Public (`public/`)

Static assets served from the root path:

- `images/` - Image files
- `favicon.ico` - Site favicon

## Extending the Application

### Adding New Blog Posts

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter at the top:
   ```markdown
   ---
   title: 'My New Post'
   date: '2024-03-05'
   ---
   ```
3. Write your content in Markdown below the frontmatter
4. The post will automatically appear on the homepage and be accessible at `/posts/[filename]`

## Adding New Pages

1. Create a new file in the `pages/` directory (e.g., `about.js`)
2. Export a React component:
   ```javascript
   export default function About() {
     return <div>About page</div>;
   }
   ```
3. The page will be accessible at `/about`

## Adding New Components

1. Create a new file in the `components/` directory
2. Create an optional CSS module file (e.g., `component.module.css`)
3. Import and use in your pages or other components

## Pre-rendering Methods

This blog uses **Static Site Generation (SSG)**:

- `getStaticProps()` - Fetches data at build time
- `getStaticPaths()` - Defines which dynamic routes to pre-render

Learn more: [Next.js Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)

## Development

### Building

```bash
npm run build
```

### Linting

ESLint is configured in `.eslintrc.js`:

```bash
npx eslint .
```

## Best Practices

- **Static Generation**: Always prefer `getStaticProps` for data that doesn't change on every request.
- **Component Modularity**: Break down large pages into smaller, reusable components.
- **Image Optimization**: Use the `next/image` component (if supported by version) or optimize images before adding to `public/`.
- **CSS Modules**: Use `.module.css` to keep styles scoped to components and avoid global conflicts.
- **Clean Content**: Keep Markdown files clean and follow the frontmatter template.

## Documentation

- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **React Docs**: [https://reactjs.org/docs](https://reactjs.org/docs)
- **Markdown Guide**: [https://www.markdownguide.org/](https://www.markdownguide.org/)

## External Resources

- [Official Next.js Tutorial](https://nextjs.org/learn/basics/create-nextjs-app)
- [Remark Markdown Processor](https://github.com/remarkjs/remark)
- [Date-fns Library](https://date-fns.org/)
- [Vercel Deployment Guide](https://vercel.com/docs)

## Troubleshooting

### Common Issues

**1. Port 3000 is already in use:**

- **Solution**: Stop the other process or run on a different port: `npm run dev -- -p 3001`

**2. Styles not applying:**

- **Solution**: Ensure you are using CSS Modules correctly (`import styles from './filename.module.css'`) and applying classes via `className={styles.classname}`.

**3. Images not loading:**

- **Solution**: Verify images are in the `public/images/` directory and paths start with `/images/`.

**4. Build errors:**

- **Solution**: Check for syntax errors in your JavaScript or Markdown frontmatter. Ensure all dependencies are installed.

## Notes

- The blog uses Next.js 10.x - consider upgrading to the latest version
- Posts are read from the file system at build time
- All pages are pre-rendered for optimal performance
- The site is fully static and can be deployed to any static hosting

## Deployment

This Next.js app can be deployed to:

- **Vercel** (recommended) - Zero configuration deployment
- **Netlify** - Supports Next.js out of the box
- **Static Export** - Run `next export` for static HTML files

For Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag
