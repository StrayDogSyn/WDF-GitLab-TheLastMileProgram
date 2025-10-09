# 🚀 Quick Reference - Portfolio Commands

## 📍 Your URLs

- **Live Site:** <https://straydogsyn.github.io/WDF-GitLab-TheLastMileProgram/>
- **GitHub Repo:** <https://github.com/StrayDogSyn/WDF-GitLab-TheLastMileProgram>

## 🎯 Quick Commands

### View Your Site Locally

```powershell
# Open in default browser
start .\index.html

# Or use VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

### Make Changes and Deploy

```powershell
# 1. Make your edits to index.html or other files

# 2. Check what changed
git status

# 3. Add all changes
git add .

# 4. Commit with message
git commit -m "Update portfolio design"

# 5. Push to GitHub (auto-deploys to GitHub Pages)
git push origin main

# 6. Wait 2-5 minutes, then refresh your live site
```

### Create Backup

```powershell
# Create a snapshot of current state
git tag -a v1.0 -m "Working portfolio version 1.0"
git push origin v1.0
```

## 🎨 Common Edits

### Change Colors

Look for these in `index.html`:

```javascript
// Ice colors (top of page)
from-slate-900 via-purple-900

// Fire colors (bottom of page)  
to-orange-900

// Card colors
from-cyan-500 to-blue-600
from-purple-500 to-pink-600
```

### Update Project Info

Find this in `index.html` around line 350:

```javascript
const otherProjects = [
  {
    title: "Your Project Name",
    subtitle: "Short Description",
    description: "Longer description here...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    demoUrl: "./path/to/project/index.html",
    previewImage: "./path/to/preview.png",
    image: "🎮" // Emoji icon
  }
];
```

### Change Ecosystem Links

Find these in `index.html` around line 65:

```html
<a href="https://straydog-syndications-llc.com">
<a href="https://straydogsyndicationllc.tech">
<a href="https://straydogsyndicationsllc.biz">
<a href="https://straydog-secondstory.org">
```

## 🔍 Troubleshooting

### Site Not Updating After Push?

```powershell
# Check GitHub Pages status
# Go to: https://github.com/StrayDogSyn/WDF-GitLab-TheLastMileProgram/settings/pages

# Force refresh in browser (clear cache)
# Press: Ctrl + Shift + R (Windows)
# Or: Ctrl + F5
```

### Images Not Loading?

```powershell
# Verify image paths are relative to index.html
# Example: ./super-quiz-master/compTIA/assets/images/preview.png

# Check if image exists
Test-Path ".\super-quiz-master\compTIA\assets\images\preview.png"
```

### Animations Not Working?

```powershell
# Check browser console for errors
# Press F12 → Console tab

# Verify JavaScript is enabled
# Verify Tailwind CSS CDN loaded
# Check Network tab for failed requests
```

## 📊 Testing Checklist

Before sharing with recruiters:

```powershell
# Test locally first
start .\index.html

# Then check each item:
```

- [ ] Page loads without errors (F12 → Console)
- [ ] Scroll effect works (ice → fire gradient)
- [ ] Project cards clickable and open demos
- [ ] Carousel buttons work (prev/next)
- [ ] All ecosystem links open correctly
- [ ] Mobile responsive (F12 → Toggle device toolbar)
- [ ] Images load properly
- [ ] No broken links (click every link)

## 🎓 Resources

### Documentation

- `README.md` - Repository overview
- `IMPLEMENTATION_STATUS.md` - Complete status report
- `PORTFOLIO_ENHANCEMENTS.md` - Optional improvements
- `CDN_MIGRATION_LOG.txt` - CDN changes history

### Key Files

- `index.html` - Main portfolio page (edit this!)
- `portfolio.html` - Alternate version (backup)
- `.markdownlint.json` - Markdown linting config
- `cspell.json` - Spell check config

## 💡 Quick Wins (30 Minutes)

Want to impress recruiters even more?

### 1. Add SEO Tags (5 mins)

Add to `<head>` in `index.html`:

```html
<meta property="og:image" content="https://straydogsyn.github.io/WDF-GitLab-TheLastMileProgram/super-quiz-master/compTIA/assets/images/preview.png">
<meta property="og:url" content="https://straydogsyn.github.io/WDF-GitLab-TheLastMileProgram/">
```

### 2. Add 3D Tilt Effect (10 mins)

See `PORTFOLIO_ENHANCEMENTS.md` → Section 2

### 3. Add Parallax Layers (15 mins)

See `PORTFOLIO_ENHANCEMENTS.md` → Section 4

## 🎯 Portfolio Pitch (30 Seconds)

> "I've built three full-stack web applications: a CompTIA certification quiz with dynamic question banks, a mobile-first D&D character manager, and an interactive Rock Paper Scissors game. The portfolio itself features glassmorphic design with animated particle effects and an ice-to-fire scroll transition. All deployed on GitHub Pages with modern tech: JavaScript, jQuery, Bootstrap 5, Tailwind CSS, and Canvas API."

## 📱 Share Links

### LinkedIn Post

```text
🚀 Excited to share my latest portfolio showcasing full-stack web development!

Featured projects:
• CompTIA Quiz Master - Interactive exam prep
• Knuckle Bones RPG - D&D character manager  
• Rock Paper Scissors - Classic game reimagined

Built with: JavaScript, Bootstrap, Tailwind CSS, Canvas API

Live demo: https://straydogsyn.github.io/WDF-GitLab-TheLastMileProgram/

#WebDevelopment #JavaScript #Portfolio #TheLastMileProgram
```

### Email to Recruiters

```text
Subject: Full-Stack Developer Portfolio - Eric H. Petross

Hi [Recruiter Name],

I wanted to share my portfolio showcasing three production-ready web applications I've built:

Portfolio: https://straydogsyn.github.io/WDF-GitLab-TheLastMileProgram/

The portfolio demonstrates my skills in:
- Modern JavaScript and DOM manipulation
- Responsive design with Bootstrap and Tailwind
- Canvas API for animations
- GitHub Pages deployment
- UI/UX design principles

I'm particularly proud of the CompTIA Quiz Master, which features a dynamic question bank and real-time scoring system.

I'd love to discuss how my skills could benefit [Company Name].

Best regards,
Eric H. Petross
StrayDog Syndications LLC
```

## 🆘 Emergency Contact

If something breaks:

1. **Revert to last working version:**

   ```powershell
   git log --oneline  # Find last good commit
   git reset --hard <commit-hash>
   git push --force origin main
   ```

2. **Restore from backup:**

   ```powershell
   # If you tagged a working version
   git checkout v1.0
   ```

3. **Start fresh from portfolio.html:**

   ```powershell
   Copy-Item .\portfolio.html .\index.html -Force
   git add .
   git commit -m "Restore from backup"
   git push origin main
   ```

## ✅ Current Status

- ✅ Portfolio live and working
- ✅ All CDN links fixed
- ✅ All projects functional
- ✅ Preview images in place
- ✅ Git repository clean
- ✅ Documentation complete

**You're ready to share with recruiters!** 🎉

---

**Quick Start:** `start .\index.html` to view locally  
**Deploy Changes:** `git add . && git commit -m "Update" && git push`  
**View Live:** <https://straydogsyn.github.io/WDF-GitLab-TheLastMileProgram/>
