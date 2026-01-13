import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from dist/public in production
// On Vercel, the structure might be different, but we'll handle it via vercel.json
const staticPath = path.resolve(__dirname, "public");

app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Export the app for Vercel serverless functions
export default app;

// For local development if needed
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
