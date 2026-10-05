package main

import (
	"embed"
	"io/fs"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

//go:embed web/*
var webFiles embed.FS

type Experience struct {
	Company  string   `json:"company"`
	Role     string   `json:"role"`
	Period   string   `json:"period"`
	Location string   `json:"location"`
	Details  []string `json:"details"`
}

type Project struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Stack       []string `json:"stack"`
	Highlights  []string `json:"highlights"`
}

type Profile struct {
	Name       string              `json:"name"`
	Role       string              `json:"role"`
	Location   string              `json:"location"`
	Telegram   string              `json:"telegram"`
	GitHub     string              `json:"github"`
	Phone      string              `json:"phone"`
	Summary    string              `json:"summary"`
	Experience []Experience        `json:"experience"`
	Projects   []Project           `json:"projects"`
	Skills     map[string][]string `json:"skills"`
	Education  map[string]string   `json:"education"`
}

func profile() Profile {
	return Profile{
		Name:     "Denis Li",
		Role:     "Go Backend Developer",
		Location: "Astana, Kazakhstan",
		Telegram: "@leeeedenis",
		GitHub:   "https://github.com/fallendwn",
		Phone:    "+7 708 655 09 50",
		Summary:  "Junior Go Backend Developer with hands-on experience building backend services, REST and gRPC APIs, event-driven systems, and reliable data flows.",
		Experience: []Experience{
			{Company: "NomadCodes", Role: "Go Backend Intern", Period: "Jun 2026 — Aug 2026", Location: "Astana, Kazakhstan", Details: []string{"Developed backend services with Go, Gin, PostgreSQL, and GORM.", "Implemented REST APIs, validation, transactions, and database operations.", "Improved role-based access control and authorization logic.", "Worked with Docker, Linux, and CI/CD workflows."}},
			{Company: "Aira Group", Role: "Go Backend Intern", Period: "Jun 2026 — Aug 2026", Location: "Astana, Kazakhstan", Details: []string{"Built Go backend features and integrated external services.", "Investigated and resolved bugs affecting stability and reliability.", "Performed end-to-end API testing across multiple scenarios."}},
		},
		Projects: []Project{
			{Name: "Social Network Backend", Description: "Microservices for authentication, user management, and notifications.", Stack: []string{"Go", "gRPC", "Redis", "NATS", "MongoDB"}, Highlights: []string{"gRPC communication between services", "Asynchronous event workflows with NATS", "Redis caching with invalidation", "JWT authentication and verification flows"}},
			{Name: "Shipping Service", Description: "A backend service for logistics, shipment processing, and delivery tracking.", Stack: []string{"Go", "PostgreSQL", "REST"}, Highlights: []string{"Shipment and delivery REST APIs", "Business rules for shipping operations", "Tracking-focused data flows"}},
			{Name: "Betting Platform Backend", Description: "Transactional services for betting, wallets, events, and outcomes.", Stack: []string{"Go", "Gin", "PostgreSQL", "GORM"}, Highlights: []string{"Transactional wallet and betting workflows", "Authenticated and validated REST APIs", "Structured domain business logic"}},
		},
		Skills: map[string][]string{
			"Languages":     {"Go", "SQL", "JavaScript", "Java"},
			"Backend":       {"Gin", "REST", "gRPC", "JWT", "GORM", "pgx"},
			"Data":          {"PostgreSQL", "MongoDB", "Redis"},
			"Messaging":     {"NATS", "RabbitMQ"},
			"DevOps":        {"Docker", "Linux", "Git", "GitHub Actions", "CI/CD"},
			"Observability": {"Prometheus", "Grafana", "OpenTelemetry"},
		},
		Education: map[string]string{"school": "Astana IT University", "degree": "Bachelor of Software Engineering", "period": "2024 — 2027"},
	}
}

func main() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.New()
	router.Use(gin.Logger(), gin.Recovery())

	public, err := fs.Sub(webFiles, "web")
	if err != nil {
		panic(err)
	}
	indexHTML, err := fs.ReadFile(public, "index.html")
	if err != nil {
		panic(err)
	}

	router.GET("/api/profile", func(c *gin.Context) {
		c.Header("Cache-Control", "public, max-age=300")
		c.JSON(http.StatusOK, profile())
	})
	router.GET("/healthz", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	})
	router.GET("/resume.pdf", func(c *gin.Context) {
		data, readErr := fs.ReadFile(public, "DenisLiCV.pdf")
		if readErr != nil {
			c.Status(http.StatusNotFound)
			return
		}
		c.Header("Content-Disposition", `attachment; filename="Denis-Li-CV.pdf"`)
		c.Data(http.StatusOK, "application/pdf", data)
	})
	router.StaticFS("/assets", http.FS(public))
	router.GET("/", func(c *gin.Context) {
		c.Data(http.StatusOK, "text/html; charset=utf-8", indexHTML)
	})
	router.NoRoute(func(c *gin.Context) {
		if c.Request.Method == http.MethodGet {
			c.Data(http.StatusOK, "text/html; charset=utf-8", indexHTML)
			return
		}
		c.JSON(http.StatusNotFound, gin.H{"error": "not found"})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	if err = router.Run("0.0.0.0:" + port); err != nil {
		panic(err)
	}
}
