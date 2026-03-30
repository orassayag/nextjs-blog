# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
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

## Adding New Blog Posts

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
     return <div>About page</div>
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

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
