const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
const list = require("./model/list");

app.use(list);

app.get("/api", cors(), (req, res) => {
  res.json({ success: true, name: "jaesung" });
});

app.listen(port, () => {
  console.log(`SERVER ON 🌎 PORT: ${port}`);
});
