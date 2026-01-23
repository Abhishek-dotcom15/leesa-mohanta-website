# Quick Deployment Checklist

Use this checklist to ensure a smooth deployment to Vercel.

## Pre-Deployment

- [ ] Code is committed to git
- [ ] Code is pushed to GitHub/GitLab/Bitbucket
- [ ] `npm run build` succeeds locally
- [ ] All pages tested locally
- [ ] No console errors in browser

## Vercel Setup

- [ ] Created Vercel account
- [ ] Connected GitHub account
- [ ] Imported project from repository
- [ ] Verified framework is detected as Next.js
- [ ] Added environment variables (if any)
- [ ] Clicked "Deploy"

## Domain Setup

- [ ] Added domain in Vercel dashboard
- [ ] Chose nameserver method OR DNS records method
- [ ] Updated DNS at domain registrar
- [ ] Waited for DNS propagation (15 min - 48 hours)
- [ ] Verified domain shows "Valid Configuration" in Vercel
- [ ] SSL certificate is active (automatic)

## Post-Deployment

- [ ] Site loads at Vercel URL
- [ ] Site loads at custom domain
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Forms work (if applicable)
- [ ] No console errors

## Optional Enhancements

- [ ] Set up Vercel Analytics
- [ ] Configure custom headers (if needed)
- [ ] Set up preview deployments for branches
- [ ] Configure redirects (if needed)

---

**Status**: Ready to deploy! ✅
