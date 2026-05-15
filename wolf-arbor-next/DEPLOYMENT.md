# Deploy `wolf-arbor-next` at `wolf-ai.com.au/tree`

This Next.js project is **already configured** to serve at the `/tree` subpath (via `basePath: '/tree'` in `next.config.mjs`).

You need to do TWO things: deploy this project to Vercel as a new project, then add a small `vercel.json` to your existing landing-page repo that forwards `/tree/*` traffic to the new deployment.

---

## Step 1 — Push THIS folder to a new GitHub repo and deploy

```bash
# from inside wolf-arbor-next/
git init -b main
git add .
git commit -m "Initial: arbor pitch site"

# create a new empty repo on github.com, e.g. wolf-arbor-pitch
git remote add origin https://github.com/YOUR_USERNAME/wolf-arbor-pitch.git
git push -u origin main
```

Then on **vercel.com**:

1. Add New Project → Import Git Repository → pick `wolf-arbor-pitch`
2. Framework: **Next.js** (auto-detected)
3. Build/Output settings: leave defaults
4. **Deploy**

Vercel will give the project a URL like `wolf-arbor-pitch.vercel.app` (or `wolf-arbor-pitch-yourusername.vercel.app`).

**Test it:** visit `https://wolf-arbor-pitch.vercel.app/tree` — the arbor site should load. The root URL `https://wolf-arbor-pitch.vercel.app/` will 404, that's expected (everything lives under `/tree`).

**Write down that URL** — you'll need it in Step 2.

---

## Step 2 — Add this `vercel.json` to your existing landing-page repo

In your **landing page repo** (the one with the `index.html` for `wolf-ai.com.au`), create a new file at the repo root called `vercel.json`. Don't touch `index.html` — just add this new file:

```json
{
  "rewrites": [
    {
      "source": "/tree",
      "destination": "https://wolf-arbor-pitch.vercel.app/tree"
    },
    {
      "source": "/tree/:path*",
      "destination": "https://wolf-arbor-pitch.vercel.app/tree/:path*"
    }
  ]
}
```

**Important:** replace `wolf-arbor-pitch.vercel.app` with the actual Vercel URL you got in Step 1.

Then commit and push:

```bash
git add vercel.json
git commit -m "Add /tree rewrite to arbor pitch"
git push
```

Vercel will automatically redeploy the main site. Wait ~30 seconds.

---

## Step 3 — Verify

Visit `https://wolf-ai.com.au/tree` — you should see the arbor pitch site. Visit `https://wolf-ai.com.au/` — you should still see your original HTML landing page. Both live, both independent.

If you ever update the arbor site, just `git push` to the `wolf-arbor-pitch` repo and Vercel rebuilds it automatically — the rewrite on the landing-page repo stays the same.

---

## Local dev

Because of `basePath: '/tree'`, when you run `npm run dev` locally the site is at:

```
http://localhost:3000/tree
```

NOT `http://localhost:3000/`. Visiting the root will 404 — that's expected.

---

## If you ever want to change the path

To move the site to a different subpath (e.g. `/arbor` instead of `/tree`):

1. In `next.config.mjs`, change `basePath: "/tree"` to `basePath: "/arbor"`
2. In the landing-page repo's `vercel.json`, change every `/tree` to `/arbor`
3. Commit + push both. Done.

---

## Troubleshooting

**"404 when I visit `wolf-ai.com.au/tree`"**
- Check the `vercel.json` rewrite URL — does it match your Vercel project URL exactly?
- Check the landing-page project deployed successfully on Vercel after you pushed
- Try the Next.js deployment URL directly: `https://wolf-arbor-pitch.vercel.app/tree` — if that works, the rewrite is the problem; if it doesn't, the Next.js project itself is the problem

**"Page loads but images / CSS are broken"**
- This means `basePath` isn't being applied. Confirm `next.config.mjs` has `basePath: "/tree"` and that you redeployed after adding it.

**"I want a subdomain instead, e.g. tree.wolf-ai.com.au"**
- Remove `basePath` from `next.config.mjs` entirely
- Skip the `vercel.json` rewrite step
- In Vercel project settings for `wolf-arbor-pitch`, add a custom domain `tree.wolf-ai.com.au` and follow Vercel's DNS instructions
