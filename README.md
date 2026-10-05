# Denis Li — Portfolio

Personal portfolio powered by a small Go/Gin backend and a responsive static frontend.

## Run locally

```powershell
go mod download
go run .
```

Open `http://localhost:8080`.

## Endpoints

- `GET /` — portfolio
- `GET /api/profile` — resume data as JSON
- `GET /resume.pdf` — downloadable CV
- `GET /healthz` — health check

Set the `PORT` environment variable to use a port other than `8080`.
