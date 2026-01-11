# Reach Consulting LLC Website

A high-conversion single-page website for Reach Consulting LLC, built for GitHub Pages deployment.

## Features

- Modern, minimalist design with smooth animations
- Fully responsive layout
- Contact form with validation
- Newsletter signup
- Social media integration
- Optimized for performance using CDN resources

## Technologies

- HTML5
- CSS3 (with animations and transitions)
- Vanilla JavaScript
- Google Fonts (Inter)
- Font Awesome Icons

## Deployment to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Select the main branch as the source
4. The site will be available at `https://[username].github.io/reach-consulting`

## Local Development

Simply open `index.html` in a web browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

- Update contact information in the footer section
- Modify social media links in the footer
- Replace form submission handlers with actual API endpoints
- Adjust colors and styling in `styles.css`
- Update business information throughout the HTML

## Form Integration

The contact form currently uses client-side validation and displays success/error messages. To integrate with a backend:

1. Update the form submission handler in `script.js`
2. Replace the simulated submission with actual API calls
3. Configure CORS if needed
4. Add server-side validation and email sending functionality

## License

© 2024 Reach Consulting LLC. All rights reserved.