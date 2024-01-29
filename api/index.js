const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");

const { logErrors, errorHandler } = require("./middleware/error.handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send("MLA API");
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Puerto " + port);
});
