const express = require("express");
const app = express();
const router = require("./routes/routes");
const { sayHi } = require("./middleware/functions");

app.use(express.json());

app.use(express.static("public"));

// ROUTES
app.use("/api/v1/data", router);

app.all("*", (req, res) => {
  res.send(
    `<div style="width:95vw;height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0;margin:0;text-align:center"><h1 style="font-size:100px">404</h1><h3>The page you are looking for does not exist or has been removed</h3></div>`
  );
});

app.listen(3000, console.log("server is listening on port 3000..."));
