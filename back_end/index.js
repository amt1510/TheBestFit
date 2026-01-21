const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const BASE_URL = "https://api.meshcapade.com/api/v1";
const API_KEY = process.env.API_KEY;

app.use(express.json());

app.post("/api/avatars/create", async (req, res) => {
  try {
    const escapadeRes = await axios.post(
      `${BASE_URL}/avatars/create/from-measurements`,
      req.body,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Forward Meshcapade response to frontend
    res.status(200).json(escapadeRes.data);

  } catch (err) {
    console.error(
      err.response?.data || err.message
    );

    res.status(err.response?.status || 500).json({
      error: "Avatar creation failed",
      details: err.response?.data,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
