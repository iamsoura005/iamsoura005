# Netlify Deployment Instructions

This repository contains a static HTML portfolio website optimized for Netlify deployment.

## Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iamsoura005/iamsoura005)

## Manual Deployment Steps

1. **Connect Repository to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select this repository
   - Set build settings:
     - **Build command:** Leave empty (or use `echo 'Static site ready'`)
     - **Publish directory:** `.` (root directory)
   - Click "Deploy site"

2. **Configuration:**
   - The `netlify.toml` file contains all necessary configuration
   - No build process is required for this static site
   - All assets are ready for deployment

## Files Structure

```
├── index.html          # Main portfolio page (entry point)
├── netlify.toml        # Netlify configuration
├── package.json        # Project metadata (simplified)
├── README.md           # GitHub profile README
├── snake.yml           # GitHub Actions for snake animation
└── nextjs-backup/      # Next.js files for future development
```

## Features

- ✅ **Static HTML** - No build process required
- ✅ **Responsive Design** - Works on all devices
- ✅ **GitHub Integration** - Live stats and project cards
- ✅ **Fast Loading** - Optimized for performance
- ✅ **SEO Ready** - Meta tags and Open Graph
- ✅ **Professional Design** - Modern UI with animations

## Troubleshooting

If deployment fails:

1. **Check Build Settings:**
   - Build command: Leave empty or use `echo 'Static site ready'`
   - Publish directory: `.` (dot for root)

2. **Manual Upload:**
   - Download the repository as ZIP
   - Upload `index.html` directly to Netlify

3. **Custom Domain:**
   - Add your custom domain in Netlify dashboard
   - Update DNS settings as instructed

## Local Development

To run locally:
```bash
# Option 1: Python
python -m http.server 3000

# Option 2: Node.js
npx serve .

# Option 3: VS Code Live Server extension
```

## Future Upgrades

The `nextjs-backup/` folder contains a complete Next.js setup for future enhancements:
- React components
- TypeScript support
- Tailwind CSS
- Advanced animations

To use the Next.js version:
1. Move files from `nextjs-backup/` to root
2. Run `npm install`
3. Update Netlify build settings to use Next.js

## Support

For issues or questions:
- Email: souradutta@example.com
- GitHub: [@iamsoura005](https://github.com/iamsoura005)
- LinkedIn: [Sourasanta Dutta](https://www.linkedin.com/in/sourasanta-dutta-852345282)