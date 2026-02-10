const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    is_success: true,
    official_email: "YOUR_CHITKARA_EMAIL"
  });
});

app.post("/bfhl", (req, res) => {
  const body = req.body;

  if (body.hcf) {
    res.json({
      is_success: true,
      official_email: "YOUR_CHITKARA_EMAIL",
      data: 12
    });
  } else {
    res.status(400).json({
      is_success: false
    });
  }
});

app.listen(3000, () => console.log("Server running"));
