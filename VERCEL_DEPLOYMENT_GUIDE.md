# Vercel Deployment Guide

This guide will walk you through deploying your Next.js website to Vercel and connecting a custom domain.

## Prerequisites

1. **GitHub Account** (or GitLab/Bitbucket)
   - Your code should be in a Git repository
   - If not already, initialize git and push to GitHub

2. **Vercel Account**
   - Sign up at [vercel.com](https://vercel.com) (free tier available)
   - You can sign up with GitHub, GitLab, or Bitbucket

3. **Domain Name** (optional, for custom domain)
   - Purchase a domain from a registrar (Namecheap, GoDaddy, Google Domains, etc.)

---

## Step 1: Prepare Your Project

### 1.1 Ensure Your Code is Committed

```bash
# Check git status
git status

# If you have uncommitted changes, commit them
git add .
git commit -m "Prepare for deployment"
```

### 1.2 Push to GitHub (if not already)

```bash
# If you haven't set up a remote repository yet
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 1.3 Verify Build Works Locally

```bash
# Install dependencies (if not already)
npm install

# Test the build
npm run build

# If build succeeds, you're ready to deploy!
```

---

## Step 2: Deploy to Vercel

### 2.1 Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (or your preferred Git provider)
4. Authorize Vercel to access your repositories

### 2.2 Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see a list of your repositories
3. Find and click **"Import"** next to your repository (`leesa-mohanta`)
4. If you don't see your repo, click **"Adjust GitHub App Permissions"** and grant access

### 2.3 Configure Project Settings

Vercel will auto-detect Next.js, but verify these settings:

- **Framework Preset**: Next.js (should be auto-detected)
- **Root Directory**: `./` (leave as default unless your Next.js app is in a subfolder)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 2.4 Environment Variables (if needed)

If your app uses environment variables:

1. In the project settings, scroll to **"Environment Variables"**
2. Click **"Add"** for each variable
3. Add variables for:
   - **Production** (for live site)
   - **Preview** (for preview deployments)
   - **Development** (optional)

Common variables you might need:
- `NEXT_PUBLIC_API_URL`
- `DATABASE_URL`
- Any API keys or secrets

**Important**: Never commit `.env` files to git. Add them only in Vercel's dashboard.

### 2.5 Deploy

1. Click **"Deploy"** button
2. Wait for the build to complete (usually 1-3 minutes)
3. Once complete, you'll see:
   - ✅ **"Congratulations! Your project has been deployed"**
   - A URL like: `https://your-project-name.vercel.app`

### 2.6 Verify Deployment

1. Click on the deployment URL to visit your live site
2. Test all pages and functionality
3. Check the browser console for any errors

---

## Step 3: Connect Custom Domain

### 3.1 Add Domain in Vercel

1. Go to your project dashboard on Vercel
2. Click on **"Settings"** tab
3. Click **"Domains"** in the left sidebar
4. Enter your domain name (e.g., `example.com` or `www.example.com`)
5. Click **"Add"**

### 3.2 Configure DNS Records

Vercel will show you the DNS records you need to add. You have two options:

#### Option A: Use Vercel's Nameservers (Easiest)

1. In Vercel, you'll see nameservers like:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

2. Go to your domain registrar (where you bought the domain)
3. Find **DNS Settings** or **Nameservers**
4. Replace existing nameservers with Vercel's nameservers
5. Save changes

**Note**: This method gives Vercel full control over DNS. Changes can take 24-48 hours to propagate.

#### Option B: Add DNS Records Manually (More Control)

1. In Vercel, you'll see DNS records to add:
   - **A Record**: `@` → `76.76.21.21` (or similar IP)
   - **CNAME Record**: `www` → `cname.vercel-dns.com.` (or similar)

2. Go to your domain registrar's DNS management
3. Add the records Vercel provides:
   - **Type**: A or CNAME
   - **Name**: `@` (for root) or `www` (for www subdomain)
   - **Value**: The value Vercel provides
   - **TTL**: 3600 (or default)

4. Save changes

### 3.3 Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- Vercel will show the status:
  - 🟡 **"Pending"** - DNS is propagating
  - 🟢 **"Valid Configuration"** - Domain is connected!

### 3.4 SSL Certificate (Automatic)

- Vercel automatically provisions SSL certificates via Let's Encrypt
- Once DNS is configured, SSL will be active within minutes
- Your site will be accessible via `https://yourdomain.com`

### 3.5 Configure Both Root and WWW (Recommended)

1. Add both domains in Vercel:
   - `example.com` (root domain)
   - `www.example.com` (www subdomain)

2. Vercel will automatically redirect one to the other
3. You can configure redirects in **Settings** → **Domains**

---

## Step 4: Post-Deployment Checklist

### 4.1 Test Your Site

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images load properly
- [ ] Forms submit correctly (if applicable)
- [ ] Mobile responsiveness works
- [ ] All pages are accessible

### 4.2 Performance Optimization

- [ ] Check Vercel Analytics (if enabled)
- [ ] Verify images are optimized
- [ ] Check Core Web Vitals in Vercel dashboard

### 4.3 Set Up Automatic Deployments

Vercel automatically deploys when you push to your main branch:
- **Production**: Deploys from `main` branch
- **Preview**: Deploys from other branches/PRs

### 4.4 Configure Custom Headers (if needed)

If you need custom headers:
1. Go to **Settings** → **Headers**
2. Add custom headers for security, CORS, etc.

---

## Step 5: Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors (check `next.config.ts` - you have `ignoreBuildErrors: true`)
   - Missing dependencies
   - Build timeout (increase in settings if needed)

### Domain Not Working

1. Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
2. Verify DNS records match Vercel's requirements
3. Wait up to 48 hours for full propagation
4. Check Vercel's domain status page

### Environment Variables Not Working

1. Ensure variables are added in Vercel dashboard
2. Restart deployment after adding variables
3. Variables prefixed with `NEXT_PUBLIC_` are exposed to browser
4. Other variables are server-side only

### Images Not Loading

1. Check `next.config.ts` - remote patterns are configured
2. Ensure image URLs are correct
3. Check CORS settings if loading from external sources

---

## Step 6: Useful Vercel Features

### Analytics

1. Go to **Analytics** tab
2. Enable Vercel Analytics (may require upgrade for detailed analytics)
3. Or use Next.js built-in analytics

### Preview Deployments

- Every push to a branch creates a preview URL
- Perfect for testing before merging to main
- Share preview URLs with team/client

### Deployment History

- View all deployments in **Deployments** tab
- Rollback to previous versions if needed
- View build logs for each deployment

---

## Quick Reference Commands

```bash
# Local development
npm run dev

# Build locally
npm run build

# Test production build locally
npm run start

# Deploy (automatic via git push)
git push origin main
```

---

## Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

## Summary

1. ✅ Push code to GitHub
2. ✅ Sign up for Vercel
3. ✅ Import project from GitHub
4. ✅ Configure environment variables (if needed)
5. ✅ Deploy
6. ✅ Add custom domain in Vercel
7. ✅ Configure DNS at your registrar
8. ✅ Wait for DNS propagation
9. ✅ SSL certificate auto-provisions
10. ✅ Your site is live! 🎉

---

**Need Help?** Check Vercel's documentation or their support team for assistance.
