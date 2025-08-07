# 🚀 Deployment Guide - ZenFlow Yoga Website

## 📋 Quick Start Options

### 🌟 **Option 1: Vercel (Recommended)**
**Best for: Easy deployment with zero configuration**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Complete yoga website"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select `yoga-website` repository
   - Click "Deploy"
   - **Your site will be live in ~30 seconds!**

3. **Get your URL:**
   - Format: `https://yoga-website-xxx.vercel.app`
   - Can add custom domain later

---

### 🌐 **Option 2: Netlify**
**Best for: Alternative to Vercel with similar features**

1. Visit [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Deploy automatically
4. Get URL: `https://yoga-website-xxx.netlify.app`

---

### 💻 **Option 3: Traditional Web Server**
**Best for: When you need to use your own hosting**

#### Step 1: Build Static Files
```bash
npm run build
npm run export
```

#### Step 2: Upload to Your Server
1. Find the `out/` folder created
2. Upload ALL contents to your web server's public folder:
   - cPanel: Upload to `public_html/`
   - Apache: Upload to `/var/www/html/`
   - Nginx: Upload to your configured web root

#### Step 3: Server Configuration
**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

**Nginx:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

---

### 📱 **Option 4: GitHub Pages**
**Best for: Free hosting directly from GitHub**

1. Enable static export in `next.config.js` (already done)
2. Build: `npm run build && npm run export`
3. Push `out/` folder to `gh-pages` branch
4. Enable Pages in repository settings

---

## 🔧 **Environment Setup**

### For Development:
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### For Production Build:
```bash
npm run build
npm start
# Visit http://localhost:3000
```

### For Static Export:
```bash
npm run export
# Files ready in 'out/' folder
```

---

## 🌍 **Custom Domain Setup**

### Vercel/Netlify:
1. Go to project settings
2. Add custom domain
3. Update DNS records as instructed

### Traditional Hosting:
1. Point domain to your server's IP
2. Configure web server for your domain

---

## 📊 **Monitoring & Analytics**

### Add Google Analytics:
1. Get tracking ID from Google Analytics
2. Add to `_app.tsx` or use environment variables

### Performance Monitoring:
- Vercel provides automatic performance insights
- Use Google PageSpeed Insights for optimization

---

## 🔒 **Security & SSL**

### Automatic (Vercel/Netlify):
- HTTPS enabled by default
- Security headers included

### Traditional Hosting:
- Install SSL certificate (Let's Encrypt recommended)
- Configure HTTPS redirects

---

## 🚨 **Troubleshooting**

### Common Issues:
1. **Images not loading:** Ensure `unoptimized: true` in next.config.js
2. **Routing issues:** Check server configuration for SPA routing
3. **Build errors:** Check all imports and dependencies

### Quick Fixes:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build

# Check for missing dependencies
npm install

# Verify all files committed
git status
```

---

## 📞 **Need Help?**

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- GitHub Issues: Create an issue in your repository

---

## 🎯 **Recommended Flow**

1. **Development:** Use `npm run dev`
2. **Testing:** Use `npm run build && npm start`
3. **Deployment:** Push to GitHub → Auto-deploy via Vercel
4. **Custom Domain:** Add in Vercel settings
5. **Analytics:** Add Google Analytics tracking

**Your beautiful amethyst haze yoga website will be live and accessible worldwide!** 🧘‍♀️✨