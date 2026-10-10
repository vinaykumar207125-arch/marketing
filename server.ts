import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: "25mb" }));

// Initialize Google GenAI client
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

const SYSTEM_INSTRUCTION = `You are the AI Creative & Growth Advisor for Aura Captures Marketing Agency, an elite Creative & Digital Growth Studio based in Agra, Uttar Pradesh, India.
Tagline: CREATE. CONNECT. GROW.

Key Agency Facts:
- Agency Name: Aura Captures Marketing Agency
- Founder & Creative Director: Vinay Kumar
- Direct Phone & WhatsApp: +91 7351318800
- Direct Email: vinaykumar207125@gmail.com
- Location: Agra, Uttar Pradesh (operating in Agra, Delhi NCR, Jaipur, Lucknow, and Pan-India).
- Production Standard: Cinema-grade production with professional camera setup used (cinema primes, precision studio lighting, Davinci Resolve color grading). We do NOT use generic office stock footage.
- The 4 Core Pillars:
  1. CONTENT: Commercial films, high-retention 9:16 vertical Reels, product photography, brand stills, founder video systems.
  2. SOCIAL: End-to-end Instagram & Facebook management, monthly content calendars, captions, community management, optimization.
  3. GROWTH: Meta Ads (FB & IG), hyper-targeted lead generation, WhatsApp conversion funnels, retargeting, analytics. (Ad spend is paid to Meta directly, separate from agency retainer).
  4. CREATIVE: Brand identity, creative direction, campaign concepts, promotional creatives.
- Growth Packages:
  - START: From ₹12K/month (social traction, 4 Reels, calendar, monthly reporting).
  - GROW: From ₹22K/month [MOST POPULAR] (regular content shoots, 8-10 Reels, photography, social management, Meta Ads setup).
  - SIGNATURE: From ₹35K/month (complete cinema production with professional camera setup used, founder video system, full Meta Ads management, dedicated creative direction).
  - CUSTOM: Custom proposals for hotels, luxury real estate, large campaigns, multi-location franchises.

Your Persona:
- Professional, confident, concise, creative, strategic.
- Do NOT sound like generic chatbot filler. Be direct and insightful.
- When users ask for a package recommendation, assess their business type (e.g. café, hotel, fashion, real estate, founder, local store) and budget, and give a specific recommendation with reasoning.
- Encourage them to book a discovery call or chat with Vinay directly on WhatsApp at +91 7351318800.`;

// API endpoint for AI assistant
app.post("/api/assistant/chat", async (req, res) => {
  try {
    const { messages, prompt } = req.body;
    const userQuery = prompt || (messages && messages[messages.length - 1]?.content);

    if (!userQuery) {
      return res.status(400).json({ error: "Query is required" });
    }

    if (!ai) {
      // Graceful fallback if no GEMINI_API_KEY is present
      return res.json({
        text: "Thank you for reaching out to Aura Captures Marketing Agency! Our agency specializes in cinema-grade content production (with professional camera setups used), Instagram management, and Meta Ads growth funnels for ambitious brands in Agra and across India. To discuss your project directly with founder Vinay Kumar, call or WhatsApp us at +91 7351318800 or review our packages starting from ₹12K/month.",
      });
    }

    // Build chat history for Gemini
    const contents: any[] = [];
    if (messages && Array.isArray(messages)) {
      for (const m of messages.slice(-6)) {
        contents.push({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        });
      }
    } else {
      contents.push({
        role: "user",
        parts: [{ text: userQuery }],
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I am here to help you select the ideal content production and growth strategy for your brand. Feel free to ask about our packages or shoot workflows!";
    return res.json({ text: replyText });
  } catch (error: any) {
    console.error("AI Assistant API error:", error);
    return res.status(500).json({
      error: "Failed to generate AI response",
      text: "Our studio AI is momentarily recalibrating. You can chat directly with founder Vinay Kumar on WhatsApp at +91 7351318800 to discuss your campaign right away.",
    });
  }
});

// Endpoint to upload real unmodified founder photo directly
app.post("/api/upload-founder-photo", (req, res) => {
  try {
    const { dataUrl } = req.body;
    if (!dataUrl) {
      return res.status(400).json({ error: "Missing dataUrl" });
    }

    const matches = dataUrl.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: "Invalid image data format" });
    }

    const ext = matches[1] === "png" ? "png" : "jpg";
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, "base64");

    const imagesDir = path.resolve(__dirname, "src/assets/images");
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    const filename = `founder_vinay_real_${Date.now()}.${ext}`;
    const targetPath = path.join(imagesDir, filename);
    fs.writeFileSync(targetPath, buffer);

    const publicPath = `/src/assets/images/${filename}`;
    return res.json({ success: true, path: publicPath });
  } catch (error: any) {
    console.error("Founder photo upload error:", error);
    return res.status(500).json({ error: "Failed to save founder photo" });
  }
});

// Configure Vite middleware in development or serve static in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
