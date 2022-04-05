const express = require("express");
const path = require("path");
const app = express();

let data = {
   name: "Brian",
   age: 18,
   bruh: "moment",
   poggers: true,
}

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/api/lookup", (req, res) => {
   let { query } = req.body;
   let value = data[query];

   res.json({
      result: value !== undefined ? value : "property does not exist"
   });
});

app.post("/api/add", (req, res) => {
   let { key, value } = req.body;

   data[key] = value;

   res.end();
});

app.listen(3000, console.log("server up"));