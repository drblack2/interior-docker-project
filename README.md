# Interior Vista

Interior Vista is a full-stack interior design website starter built with React, Vite, Express, and MongoDB. It includes a modern portfolio-style frontend, contact and consultation forms, and a backend API server for project and consultation data.

## Project structure

- `frontend/` — React client built with Vite
- `backend/` — Express API server with MongoDB integration
- `frontend/src/` — React components, pages, styles, and API client
- `backend/models/` — Mongoose models for `Project` and `Consultation`
- `backend/controllers/` — Route handlers for projects and consultations
- `backend/routes/` — API route definitions
- `backend/config/` — Database configuration

## Features

- Responsive React frontend with polished interior design styling
- Centered homepage navigation and modern hero layout
- Services, portfolio, about, contact, and consultation pages
- Dynamic project fetching from backend API
- Inquiry form with backend submission support
- Express backend with MongoDB persistence

## Getting started

### Prerequisites

- Node.js 18+ or newer
- npm
- MongoDB connection URI (local or hosted)

### Install dependencies

From the project root:

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

### Configure backend

Create `backend/.env` with your MongoDB URI and port settings:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/interior-vista
```

### Run locally

Start the frontend and backend in separate terminals:

```bash
npm --prefix frontend run dev
npm --prefix backend start
```

### Build frontend

```bash
npm --prefix frontend run build
```

## API Endpoints

The backend exposes the following endpoints:

- `GET /api/projects` — fetch project listings
- `POST /api/consultations` — submit consultation inquiries

> If the API is not connected, the frontend will display sample projects automatically.

## Customization

- Update frontend UI in `frontend/src/`
- Modify styles in `frontend/src/styles.css`
- Add or change backend routes in `backend/routes/`
- Extend database models in `backend/models/`

## Deployment

- Build the frontend with `npm --prefix frontend run build`
- Deploy the backend with Node.js to any provider that supports Express
- Ensure `MONGODB_URI` is configured in your deployment environment

## Notes

This starter is designed for an interior design portfolio site and can be adapted for agencies, studios, or freelancer showcases.
