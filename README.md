# MyApp

A React + Vite web app with React Router and Tailwind CSS.

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool & dev server
- **React Router v6** — client-side routing
- **Axios** — HTTP requests
- **Tailwind CSS v4** — utility-first styling

---

## Getting Started

### 1. Clone the repo

```bash
git clone <repo-url>
cd my-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` and fill in your values (e.g. API base URL).

### 4. Start the dev server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Project Structure

```
src/
├── api/              # Axios client & service modules
│   ├── client.js     # Base axios instance with interceptors
│   └── exampleService.js
├── components/       # Shared/reusable components
│   └── Navbar.jsx
├── hooks/            # Custom React hooks
├── pages/            # Route-level page components
│   ├── Home.jsx
│   └── NotFound.jsx
├── utils/            # Helper functions
├── App.jsx           # Router + layout
├── main.jsx          # App entry point
└── index.css         # Tailwind entry
```

---

## Branching Conventions

| Branch | Purpose |
|--------|---------|
| main | Production-ready code |
| dev | Integration branch — merge feature branches here first |
| feature/<name> | New features |
| fix/<name> | Bug fixes |

### Recommended flow

```bash
# Always start from dev
git checkout dev
git pull origin dev

# Create your branch
git checkout -b feature/my-feature

# When done, open a PR into dev
```

---

## Scripts

| Command | Description |
|---------|-------------|
| npm run dev | Start dev server |
| npm run build | Build for production |
| npm run preview | Preview production build |

---

## Adding a New Page

1. Create src/pages/YourPage.jsx
2. Add a route in src/App.jsx:

```jsx
<Route path="/your-path" element={<YourPage />} />
```

## Adding a New API Service

1. Create src/api/yourService.js following the pattern in exampleService.js
2. Import and call it from your page or custom hook
