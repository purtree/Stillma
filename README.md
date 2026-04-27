# STILLMA — Coming Soon

Minimalist coming soon page for [stillma.com](https://stillma.com).  
Built with Next.js 14, Tailwind CSS, and Framer Motion.  
Email signups are collected via Google Sheets (Apps Script webhook).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Language | TypeScript |
| Email storage | Google Sheets via Apps Script |
| Hosting | Vercel |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/stillma-web.git
cd stillma-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

> See [Google Apps Script setup](#google-apps-script-setup) below.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Google Apps Script Setup

1. Create a new [Google Sheet](https://sheets.new)
2. Set column headers: `Email` | `Date`
3. Go to **Extensions → Apps Script** and paste the contents of `scripts/apps-script.gs`
4. Click **Deploy → New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the deployment URL and add it to `.env.local` as `APPS_SCRIPT_URL`

---

## Project Structure
stillma-web/
├── app/
│ ├── api/
│ │ └── subscribe/
│ │ └── route.ts # Email subscription API endpoint
│ ├── globals.css
│ ├── layout.tsx # Root layout, metadata, viewport
│ └── page.tsx # Home page (Server Component)
├── components/
│ └── ComingSoon.tsx # Main page UI (Client Component)
├── scripts/
│ └── appscript.js # Google Apps Script source
├── public/
│ └── og-image.jpg # Open Graph image (1200×630px)
├── .env.local # Local environment variables (not committed)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md


---

## Deployment

The project is deployed via [Vercel](https://vercel.com).

### Environment Variables

Add the following in **Vercel → Project → Settings → Environment Variables**:

| Variable | Description |
|---|---|
| `APPS_SCRIPT_URL` | Google Apps Script web app deployment URL |

### Deploy

```bash
git push origin main
```

Vercel auto-deploys on every push to `main`.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server locally |
| `npm run lint` | Run ESLint |

---

## Notes

- Email addresses are stored in Google Sheets — no third-party email service required
- The Apps Script deployment URL acts as a lightweight auth token — keep it private
- Add `/public/og-image.jpg` (1200×630px) before going live for proper social sharing previews

---

## License

Private. All rights reserved. © 2026 STILLMA.
