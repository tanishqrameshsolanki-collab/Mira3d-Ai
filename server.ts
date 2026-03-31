import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { type, data } = req.body;
      const resendApiKey = process.env.RESEND_API_KEY;

      if (!resendApiKey) {
        console.error("RESEND_API_KEY is missing");
        return res.status(500).json({ error: "Email service not configured" });
      }

      const resend = new Resend(resendApiKey);

      let subject = "";
      let html = "";

      if (type === "demo") {
        subject = `New Demo Request from ${data.firstName} ${data.lastName}`;
        html = `
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
        `;
      } else if (type === "contact") {
        subject = `New Contact Inquiry: ${data.inquiryType}`;
        html = `
          <h2>New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `;
      } else {
        return res.status(400).json({ error: "Invalid request type" });
      }

      const { data: emailData, error } = await resend.emails.send({
        from: "Mira3D <onboarding@resend.dev>",
        to: ["tanishq.rameshsolanki@gmail.com"],
        subject,
        html,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: error.message });
      }

      res.status(200).json({ success: true, data: emailData });
    } catch (error: any) {
      console.error("Server error:", error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
