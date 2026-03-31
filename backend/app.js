const express = require('express');
const app = express();

app.get('/api/movies', (req, res) => {
  res.json([
    { name: "Inception" },
    { name: "Interstellar" },
    { name: "Dark Knight" }
  ]);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
