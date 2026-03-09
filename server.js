import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/youtube-feed", async (req, res) => {
  const channelId = "UCRkmAzBKgtkX4JIM6CTLVkg";
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    const response = await fetch(feedUrl);
    const xml = await response.text();
    res.send(xml); // React frontend can parse XML
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch feed");
  }
});

// Use Heroku port or fallback to 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));