# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/nextjs-blog/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment details (OS, Node version, browser)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **JavaScript (ES6+)** for React components
- **Next.js** framework conventions
- **ESLint** for code quality

Before submitting:
```bash
# Install dependencies
npm install

# Check for linting errors
npm run lint

# Build to ensure no errors
npm run build

# Test locally
npm run dev
```

### Coding Standards

1. **Component naming**: Use PascalCase for components (e.g., `Layout`, `Date`)
2. **File naming**: Use kebab-case for files (e.g., `layout.module.css`)
3. **CSS Modules**: Use CSS modules for component-specific styles
4. **Markdown posts**: Store blog posts in the `posts/` directory with `.md` extension
5. **Type safety**: Consider adding PropTypes or migrating to TypeScript
6. **Accessibility**: Ensure all components are accessible (proper alt text, semantic HTML)

### Adding New Features

When adding new features:
1. Create components in the `components/` directory
2. Add pages in the `pages/` directory (follows Next.js file-based routing)
3. Add utility functions in the `lib/` directory
4. Add styles in the `styles/` directory
5. Test thoroughly in development mode

### Adding Blog Posts

To add a new blog post:
1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter with required fields:
   ```markdown
   ---
   title: 'Your Post Title'
   date: 'YYYY-MM-DD'
   ---
   
   Your content here...
   ```
3. Test that the post appears on the homepage and has its own page

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
